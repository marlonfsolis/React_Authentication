import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/posts.action";

import "./PostCard.component.css";
import * as postsService from "../../services/Posts.service";

const PostCard = props => {
   const loading = useState(false);
   const dispatch = useDispatch();

   const viewCarDetailsHandler = () => {
      props.history.push(`/posts/detail/${props.id}`);
   };

   const deletePostHandler = event => {
      event.preventDefault();
      event.stopPropagation();
      postsService.deletePost(props.id).then(res => {
         if (res && res.status === 200) {
            dispatch(deletePost(props.id));
         }
      });
   };

   const getSpinnerElem = () => {
      if(loading) {
         return (
            <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>
         );
      }
      return null;
   };

   return (
      <React.Fragment>
         <Card className="Post" onClick={viewCarDetailsHandler}>
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.content}</Card.Text>
               <Button variant="primary" onClick={deletePostHandler}>
                  {getSpinnerElem()}
                  Delete
               </Button>
            </Card.Body>
         </Card>
      </React.Fragment>
   );
};

export default withRouter(PostCard);
