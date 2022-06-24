import React from "react";
import { NavLink } from "react-router-dom";
 import { Navbar,FormControl,Button,Form} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
          <Navbar.Brand href="#home">
                <img className="logo"
                    src={require("../static/9.jpeg")}
                    width="50px"
                    height="5%"
                    border-radius="50%"
                    alt="logo" />{' '}
                    <strong>qUICK mART</strong>
            </Navbar.Brand>
            
           
          </NavLink>
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button variant="outline-dark">Search</Button>
      </Form>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
            
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;