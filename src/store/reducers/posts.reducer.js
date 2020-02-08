import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
    posts: [],
    selectedPostId: 0
};

const delete_post = (state, postId) => {
    const posts = state.posts.filter(post => {
        return post.key !== postId;
    });
    
    return {
        ...state,
        posts: posts
    };
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_POSTS: return updateObject(state, {posts:action.posts})
        case actionTypes.DELETE_POST: return delete_post(state, action.postId)
        default: return state
    }
}