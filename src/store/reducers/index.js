import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import titles from './titles';

const rootReducer = combineReducers({
  messages: messagesReducer,
  titles
});

export default rootReducer;
