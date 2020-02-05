import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { storePosts } from "../../../store/actions/posts.action";
import * as postsService from "../../../services/Posts.service";
import PostCard from "../../../components/PostCard/PostCard.component";
import { Row, Col } from "react-bootstrap";
import './Posts.page.css';

class Posts extends Component {
   static propTypes = {
      posts: PropTypes.array,
      selectedPostId: PropTypes.number
   };

   componentDidMount() {
      postsService.getPosts().then(posts => {
         this.props.onStorePosts(posts);
      });
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
         <div>
            {posts.map(p => {
               return <PostCard key={p.key} title={p.title} content={p.content}></PostCard>;
            })}
         </div>
      );
   }

   render() {
      return (
         <div>
            <Row>
               <Col md={2}></Col>
               <Col md={8}>
                  <div className="page-title">
                     <h2>Post List</h2>
                  </div>
                  <div className="card-list">{this.getPostCards()}</div>
               </Col>
               <Col md={2}></Col>
            </Row>
         </div>
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
