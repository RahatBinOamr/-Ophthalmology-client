import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthContext";
import {  toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
const Login = () => {
useTitle('login')
  const {googleLogin,signIn,loading}=useContext(AuthContext)
  const navigate = useNavigate()
const location = useLocation()
const from = location?.state?.from?.pathname || '/';
    const handelSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password);
        signIn(email,password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          toast.success('Login successful!', { autoClose: 500 })
          const currentUser = {
            email:user.email
          }
          console.log(currentUser)
         fetch(`https://dentatist-server-rahatbinoamr.vercel.app/jwt`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(currentUser)

         }).then(res=>res.json())
         .then(data=>{
          console.log(data);
          localStorage.setItem('token',data.token)
          navigate(from, {replace:true})
         })
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
        navigate(from, {replace:true})
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
  return (
    <div className="w-75 m-5 p-5 bg-secondary">
      <Form onSubmit={handelSubmit} className="mb-3">
        <Form.Label className="text-center justify-content-center w-50 text-warning ">
          <h1>Login</h1>
        </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-light">
        <h5> if you have no account please <Link to='/register'> register</Link></h5>
        </Form.Text>
        <Button style={{width:'100%'}} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button onClick={handelGoogle} style={{width:'100%'}} variant="primary" type="submit">
       <FaGoogle/>  Google
        </Button>
    </div>
  );
};

export default Login;
