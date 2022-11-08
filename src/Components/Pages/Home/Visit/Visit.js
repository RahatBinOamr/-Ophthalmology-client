import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Visit = () => {
  return (
    <div className="mb-5 bg-secondary m-4 p-4 text-bg-light">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" placeholder="message" rows={3} />
        </Form.Group>


        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Button  variant="primary">
              Visit
            </Button>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Link to='/home'>
            
              <Button  variant="primary">
                
                Go To Home
              </Button>
            </Link>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default Visit;
