import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { posts, authentication } from './reducers/index'

const reducers = combineReducers({
  posts,
  authentication
})

export default createStore(
  reducers,
  applyMiddleware(thunk,logger))