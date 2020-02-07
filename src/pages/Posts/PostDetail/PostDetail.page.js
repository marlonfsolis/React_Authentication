import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./PostDetail.page.css";
import PostDetailForm from "../../../components/PostDetailForm/PostDetailForm.component";
import * as postsService from '../../../services/Posts.service';

export default class PostDetail extends Component {
   constructor(props) {
      super(props);

      this.state = this.getInitState();

      this.onAddPost = this.onSavePost.bind(this);
   }

   getInitState() {
      return {
         currentId: '',
         isEditMode: false,
         title: 'Create new Posts',
         post: {
            title: '',
            content: ''
         }
      };
   }

   getPost() {
      const id = this.props.match.params.id || '';
      if (id !== this.state.currentId) {
         this.setState({
            ...this.getInitState(),
            currentId: id
         });

         if (id !== '' && id !== 'new') {
            this.setState({
               isEditMode: true,
               title: 'Update this post'
            });
   
            postsService.getPost(id).then(post => {
               this.setState({ post: post });
            });
         }

         console.log('Id', id)
      }
   }

   componentDidMount() {
      console.log('componentDidMount');

      this.getPost();
   }

   componentDidUpdate() {
      console.log('componentDidUpdate');
      this.getPost();
   }

   onSavePost(post) {
      postsService.savePost(post, this.state.isEditMode).then(res => {
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
                     <h2>{this.state.title}</h2>
                  </div>
                  <PostDetailForm post={this.state.post} onSavePost={this.onAddPost}></PostDetailForm>
               </Col>
               <Col md={3}></Col>
            </Row>
         </div>
      );
   }
}
