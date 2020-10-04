import { combineReducers } from 'redux'
import { createStore } from 'redux';
import list from './reducers/list';
let rootReducer =  combineReducers({ list });

export default createStore(rootReducer,
  (window ).__REDUX_DEVTOOLS_EXTENSION__ && (window ).__REDUX_DEVTOOLS_EXTENSION__()
);