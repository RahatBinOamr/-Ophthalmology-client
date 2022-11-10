import React from "react";
import { Button, Form } from "react-bootstrap";


const AddService = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const img = form.photoURL.value;
    const description = form.message.value;
    const visit = form.visit.value;
    const service={
        name,img,description,visit
    }
    console.log(service);
    fetch(`https://dentatist-server-rahatbinoamr.vercel.app/services`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  };
  return (
    <div className="w-75 m-5 p-5 bg-secondary">
      <Form onSubmit={handelSubmit} className="mb-3">
        <Form.Label className="text-center justify-content-center w-50 text-warning "></Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" name="name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Visit</Form.Label>
          <Form.Control type="text" name="visit" placeholder="visit" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            placeholder="message"
            required
          />
        </Form.Group>

        <Button style={{ width: "100%" }} variant="primary" type="submit">
          Service Added
        </Button>
      </Form>
    </div>
  );
};

export default AddService;
