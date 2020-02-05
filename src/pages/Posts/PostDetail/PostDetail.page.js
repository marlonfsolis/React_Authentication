import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./PostDetail.page.css";
import PostDetailForm from "../../../components/PostDetailForm/PostDetailForm.component";
import * as postsService from '../../../services/Posts.service';

export default class PostDetail extends Component {
    constructor(props) {
        super(props);

        this.onAddPost = this.onAddPost.bind(this);
    }

   onAddPost(post) {
      console.log(post);
      postsService.savePost(post).then(res => {
          console.log('saved post');
      });
   }

   render() {
      return (
         <div>
            <Row>
               <Col md={3}></Col>
               <Col md={6}>
                  <div className="page-title">
                     <h2>Create new Posts</h2>
                  </div>
                  <PostDetailForm onAddPost={this.onAddPost}></PostDetailForm>
               </Col>
               <Col md={3}></Col>
            </Row>
         </div>
      );
   }
}
