import {combineReducers} from 'redux';

import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer 
    /*'posts' is the state field (sub-state of Redux state) 
            which created by 'postReducer' reducer */
});