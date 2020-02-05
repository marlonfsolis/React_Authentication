import React from "react";
import { Card, Button } from "react-bootstrap";

export default function PostCard(props) {
   return (
      <div>
         <Card style={{ width: "18rem" }}>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.content}</Card.Text>
               <Button variant="primary">Delete</Button>
            </Card.Body>
         </Card>
      </div>
   );
}
