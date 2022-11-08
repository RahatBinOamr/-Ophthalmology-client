import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Visit = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(name, email, phone, message);
  };
  return (
    <div className="mb-5 bg-secondary m-4 p-4 text-bg-light">
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="email"
            placeholder="Full Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number </Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="message"
            required
            rows={3}
          />
        </Form.Group>

        <Button className="mb-3" style={{ width: "100%" }} variant="primary">
          Visit
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
