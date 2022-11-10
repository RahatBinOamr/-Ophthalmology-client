import React, { useContext } from "react";
import { Button, Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from '../../Assets/nav/img.jpg'
import '../.././Components/Shared/header.css'
import { AuthContext } from "../../Context/AuthContext";
import { FaUser } from "react-icons/fa";
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="info"
      className=" text-light"
      variant="light"
    >
      <Container> 
        <Navbar.Brand> <Image variant="left" src={img} className="img" /> Ophthalmology</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            {
              user?.email? 
              <> 

              <Nav.Link className="me-3" href="/addService">Add service</Nav.Link>
              <Nav.Link className="me-3" href="/visitor">Visitor</Nav.Link>
              {user?.photoURL ? (
              <Image
              className="me-3"
              style={{ height: "30px" }}
              roundedCircle
              src={user?.photoURL}
            ></Image>
            ) : (
              <FaUser className="me-3"></FaUser>
            )}
              <Button onClick={()=>logOut()} variant="secondary" size="sm">
              Log Out
            </Button></> 
              : 
              <>
              
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              
             
              </>
            }
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
