import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';

export default class HeaderNavBar extends Component {
   render() {
      return (
         <React.Fragment>
            <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link href="/home">Home</Nav.Link>
                     <Nav.Link href="/Posts">Posts</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </React.Fragment>
      );
   }
}
