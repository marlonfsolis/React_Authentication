import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
    posts: [],
    selectedPostId: 0
};
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_POSTS: return updateObject(state, {posts:action.posts})
        default: return state
    }
}