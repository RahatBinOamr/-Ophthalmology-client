import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext";
import {  toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
const Register = () => {
  useTitle('register')
  const{googleLogin,createUser,updateUserProfile,loading }=useContext(AuthContext)
  const navigate = useNavigate()
    const handelSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success('Register successful!', { autoClose: 500 })
          handleUpdateUserProfile(name, photoURL);
          navigate('/')
          form.reset()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, { autoClose: 500 })
        });
       
    }
   
    const handelGoogle =()=>{
      googleLogin()
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
     
        const user = result.user;
        toast.success('Login successful!', { autoClose: 500 })
        navigate('/')
      }).catch((error) => {
    
        const errorCode = error.code;
        const errorMessage = error.message;
     
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage, { autoClose: 500 })
       
      });
    }
    if(loading){
      return  <Spinner animation="border" variant="primary" />
  }
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }

      updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }
//   if(loading){
//     return  <Spinner animation="border" variant="primary" />
// }
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
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-light">
        <h5> if you have an account please <Link  to='/login'> login</Link></h5>
        </Form.Text>
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
