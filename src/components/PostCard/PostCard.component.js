import React from "react";
import { Card, Button } from "react-bootstrap";
import "./PostCard.component.css";
import { withRouter } from "react-router";

const PostCard = (props) => {
   const viewCarDetails = () => {
      props.history.push(`/posts/${props.id}`);
   };

   return (
      <React.Fragment>
         <Card className="Post" onClick={viewCarDetails}>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.content}</Card.Text>
               <Button variant="primary">Delete</Button>
            </Card.Body>
         </Card>
      </React.Fragment>
   );
}

export default withRouter(PostCard);