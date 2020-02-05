import * as actionTypes from '../actionTypes';


export const storePosts = (posts) => ({
    type: actionTypes.STORE_POSTS,
    posts
});