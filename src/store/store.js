import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './reducers/posts.reducer';
import { authReducer } from './reducers/auth.reducer';

const rootReducer = combineReducers({
    postsState: postsReducer,
    authState: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;