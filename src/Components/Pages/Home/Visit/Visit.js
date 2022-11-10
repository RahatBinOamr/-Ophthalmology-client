import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthContext";
import {  toast } from 'react-toastify';
import useTitle from "../../../../Hooks/useTitle";
const Visit = ({id,title,visit}) => {
  const {user}= useContext(AuthContext)
 useTitle('Visit')
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email
    const phone = form.phone.value;
    const photo = form.photo.value
    const message = form.message.value;
    console.log(name, email, phone,message);

    const visitor ={
      id,title,visit,
      photo,
      name,email,phone,message
      
    }

    fetch(`https://dentatist-server.vercel.app/visitors`,{
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
        toast.success('review successfully!', { autoClose: 500 })
      }
    })
    .catch(err=>console.error(err))
  };
  return (
    <div className="mb-5 bg-secondary m-4 p-4 text-bg-light">
      <h1> Please Review </h1>
       <Form onSubmit={handelSubmit} className="mb-3">
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photo" type="text" placeholder="Phot URL" />
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
         Added review
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
