import React from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router";

import "./PostCard.component.css";
import * as postsService from "../../services/Posts.service";

const PostCard = (props) => {
   const viewCarDetailsHandler = () => {
      props.history.push(`/posts/detail/${props.id}`);
   };

   const deletePostHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      postsService.deletePost(props.id);
   }

   return (
      <React.Fragment>
         <Card className="Post" onClick={viewCarDetailsHandler}>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.content}</Card.Text>
               <Button variant="primary" onClick={deletePostHandler}>Delete</Button>
            </Card.Body>
         </Card>
      </React.Fragment>
   );
}

export default withRouter(PostCard);