import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Navigation = () => {
  return (
  
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/createAccount">Create an Account</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <NavDropdown title="Transactions" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/deposit">
                    Deposit
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/withdraw">
                    Withdraw
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/transfer">
                    Transfer
                  </NavDropdown.Item>  
                </NavDropdown>
                <Nav.Link href="/userList">Administrator</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      
    
  );
};

export default Navigation;
