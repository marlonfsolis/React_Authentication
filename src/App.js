import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNavBar from "./components/HeaderNavBar/HeaderNavBar.component";
import Posts from "./pages/Posts/Posts/Posts.page";
import Home from "./pages/Home/Home.page";

function App() {
   return (
      <BrowserRouter>
         <Container>
            <Row>
               <Col>
                  <HeaderNavBar></HeaderNavBar>
               </Col>
            </Row>
            <Row>
               <Col>
                  <Switch>
                     <Route path="/Home" component={Home} />
                     <Route path="/Posts" component={Posts} />
                     <Redirect from="/" to="/Home"></Redirect>
                  </Switch>
               </Col>
            </Row>
         </Container>
      </BrowserRouter>
   );
}

export default App;
