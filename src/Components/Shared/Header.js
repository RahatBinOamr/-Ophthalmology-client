import React from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from '../../Assets/nav/img.jpg'
import '../.././Components/Shared/header.css'
const Header = () => {
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
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
