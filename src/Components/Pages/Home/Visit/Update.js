import React, { useState }  from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../../Hooks/useTitle";

const Update = () => {
  useTitle('update')
  const patient= useLoaderData()
  console.log(patient)
  const [visits, setVisits] = useState([]);
  const handleStatusUpdate = (e )=> {
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/visitors/${patient._id}`, {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(visits)
    })
    .then(res => res.json())
    .then(data=>{
        if(data.acknowledged){
          toast.success('Update successful!', { autoClose: 500 })
            e.target.reset()
        }
    })
  };
  const handelChange =(ev)=>{
    const value = ev.target.value;
        const field = ev.target.name;
        const newVisit = { ...visits };
        newVisit[field] = value;
        setVisits(newVisit);
        console.log(newVisit);
  }
  return (
    <div className="m-5 p-5 bg-secondary">
        
    <Form onSubmit={handleStatusUpdate()}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handelChange} type="text" name="name" defaultValue={patient?.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handelChange} type="email" name="email" defaultValue={patient?.email} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
  );
}

export default Update;
