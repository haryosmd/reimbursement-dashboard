import { applyMiddleware } from 'redux';
import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import reimbReducer from './reducers/reimbReducer';

const reducer = combineReducers({
  userReducer,
  reimbReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
