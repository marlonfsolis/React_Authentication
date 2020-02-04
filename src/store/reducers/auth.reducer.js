import * as actionTypes from '../actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN:
            return updateObject(state, { token: action.token })
        default:
            return state
    }
}