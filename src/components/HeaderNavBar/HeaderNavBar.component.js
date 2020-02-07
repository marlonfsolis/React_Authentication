import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default class HeaderNavBar extends Component {
   render() {
      return (
         <React.Fragment>
            <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                     <Nav.Link  as={NavLink} to="/posts" exact>Posts</Nav.Link>
                     <Nav.Link  as={NavLink} to="/posts/new" exact>New Post</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </React.Fragment>
      );
   }
}
