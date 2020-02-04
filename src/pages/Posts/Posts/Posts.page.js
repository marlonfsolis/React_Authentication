import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from '../../../axios-main';
import {connect} from 'react-redux';
import {storePosts} from '../../../store/actions/posts.action';

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array,
        selectedPostId: PropTypes.number 
    }

    
    componentDidMount() {
        axios.get('/posts.json')
        .then((res) => {
            console.log(res);
        });
    }
    

    render() {
        return (
            <div>
                <p>Post list</p>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    posts: state.postsState.posts,
    selectedPostId: state.postsState.selectedPostId
});

const mapDispatchToProps = dispatch => {
    return {
        onStorePosts: () => dispatch(storePosts.storePosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);