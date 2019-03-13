import {createStore, applyMiddleware, compose} from 'redux'; //add compose
import ReduxThunk from 'redux-thunk'

import RootReducer from './reducers'; //in index.js

const initialState = {};

const middlewares = [ReduxThunk]; 

const store = createStore(RootReducer, 
                            initialState,
                            compose(
                                applyMiddleware(...middlewares),
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
                                //redux Chrome dev extension usage
                            ) 
);

export default store;