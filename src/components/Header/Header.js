import React from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return (
      <Navbar
        className="bg-white position-fixed w-100 z-1"
        expand="lg"
      >
        <Container fluid className="d-flex justify-content-between mx-5">
          <div>
            <Navbar.Brand href="#">edustage</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>
          <div>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action3">Pages</Nav.Link>
                <Nav.Link href="#action4">Blog</Nav.Link>
                <Nav.Link href="#action5">Content</Nav.Link>
              </Nav>
              <Form className="d-flex">
                {/* <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                /> */}
                <button className="bg-transparent border-0">
                  <FaSearch></FaSearch>
                </button>
              </Form>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    );
};

export default Header;