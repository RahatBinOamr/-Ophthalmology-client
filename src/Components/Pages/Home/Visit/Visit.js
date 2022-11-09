import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthContext";
import {  toast } from 'react-toastify';
const Visit = ({id,title,visit}) => {
  const {user}= useContext(AuthContext)
 
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone,message);

    const visitor ={
      id,title,visit,
      
      name,email,phone,message
      
    }

    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/visitors`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(visitor)

    })
    .then(res=>res.json())
    .then(data=> {
      console.log(data);
      if(data.acknowledged){
        form.reset()
        toast.success('visit successfully!', { autoClose: 500 })
      }
    })
    .catch(err=>console.error(err))
  };
  return (
    <div className="mb-5 bg-secondary m-4 p-4 text-bg-light">
       <Form onSubmit={handelSubmit} className="mb-3">
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Full Name" required />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  defaultValue={user?.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name="phone" placeholder="Phone" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" placeholder="message" required/>
      </Form.Group>
        <Button style={{width:'100%'}}  variant="primary" type="submit">
         visit
        </Button>
      </Form>
     
      <Link to="/home">
        <Button style={{ width: "100%" }} variant="primary">
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

export default Visit;
