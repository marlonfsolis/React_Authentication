import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { storePosts } from "../../../store/actions/posts.action";
import * as postsService from "../../../services/Posts.service";
import PostCard from "../../../components/PostCard/PostCard.component";
import { Row, Col } from "react-bootstrap";
import "./Posts.page.css";

class Posts extends Component {
   static propTypes = {
      posts: PropTypes.array,
      selectedPostId: PropTypes.number,
      componentUpdating: PropTypes.bool
   };

   constructor(props) {
      super(props);
   }

   getPosts() {
      postsService.getPosts().then(posts => {
         this.props.onStorePosts(posts);
      });
   }

   componentDidMount() {
      this.getPosts();
   }

   componentDidUpdate() {
   }

   getPostCards() {
      const posts = this.props.posts;
      if (!posts || (posts && posts.length === 0)) {
         return (
            <div>
               <p>There are no posts to show.</p>
            </div>
         );
      }
      return (
         <Row>
            {posts.map(p => {
               return (
                  <Col key={p.key}>
                     <PostCard id={p.key} title={p.title} content={p.content}></PostCard>
                  </Col>
               );
            })}
         </Row>
      );
   }

   render() {
      return (
         <Row>
            <Col md={1}></Col>
            <Col md={8}>
               <div>
                  <h2>Post List</h2>
               </div>
               <section name="cards">{this.getPostCards()}</section>
            </Col>
            <Col md={1}></Col>
         </Row>
      );
   }
}

const mapStateToProps = state => ({
   posts: state.postsState.posts,
   selectedPostId: state.postsState.selectedPostId
});

const mapDispatchToProps = dispatch => {
   return {
      onStorePosts: posts => dispatch(storePosts(posts))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
