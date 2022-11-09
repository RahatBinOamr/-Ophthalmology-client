import React from "react";
import { Button, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../../Hooks/useTitle";

const Update = () => {
  useTitle('update')
  const patient= useLoaderData()
  console.log(patient)
 


  const handelChange =(e)=>{
    e.preventDefault();
    const person = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/visitors/${patient._id}`, {
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(person)
    })
    .then(res => res.json())
    .then(data=>{
        if(data.success){
          toast.success(data.message);
            e.target.reset()
        }
    })

  }
  return (
    <div className="m-5 p-5 bg-secondary">
        
    <Form onSubmit={handelChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" name="name" defaultValue={patient?.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" name="email" defaultValue={patient?.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" placeholder="message" defaultValue={patient?.message} required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
    </div>
  );
}

export default Update;
