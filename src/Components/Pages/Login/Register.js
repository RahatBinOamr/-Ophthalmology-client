import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext";

const Register = () => {
  const{googleLogin}=useContext(AuthContext)
    const handelSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
       
    }
    const handelGoogle =()=>{
      googleLogin()
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
     
        const user = result.user;
   
      }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
     
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
       
      });
    }
  return (
    <div className="w-75 m-5 p-5 bg-secondary">
      <Form onSubmit={handelSubmit} className="mb-3">
        <Form.Label className="text-center justify-content-center w-50 text-warning ">
          <h1>Register</h1>
        </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>

        <Button style={{width:'100%'}} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <Button onClick={handelGoogle} style={{width:'100%'}} variant="primary" type="submit">
       <FaGoogle/>  Google
        </Button>
    </div>
  );
};

export default Register;
