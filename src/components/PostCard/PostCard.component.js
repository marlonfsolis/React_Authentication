import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PostCard.page.css";

export default function PostCard(props) {
   return (
      <React.Fragment>
         <Card className="Post">
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.content}</Card.Text>
               <Button variant="primary">Delete</Button>
            </Card.Body>
         </Card>
      </React.Fragment>
   );
}
