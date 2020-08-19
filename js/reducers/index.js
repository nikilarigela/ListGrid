import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const appReducer = combineReducers({
  news: newsReducer,
});

export default appReducer;
