import { SET_MESSAGES } from '../actions';

const defaultState = {
  messages: [
    'terminator tim!',
    'alibaster abraham!',
    'gentle georgiano!'
  ]
};

export default function messagesReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return { ...state, messages: action.payload.messages };
    default:
      return state;
  }
}
