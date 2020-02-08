import * as actionTypes from '../actionTypes';


export const storePosts = (posts) => ({
    type: actionTypes.STORE_POSTS,
    posts
});

export const deletePost = (postId) => ({
    type: actionTypes.DELETE_POST,
    postId
});