export const SET_MESSAGES = 'SET_MESSAGES';

export const setMessages = (messages = []) => ({
  type: SET_MESSAGES,
  payload: { messages }
});

export const addMessage = (message) => (dispatch, getState) => dispatch(
  setMessages([
    ...getState().messages.messages,
    message
  ])
);

export const removeMessage = (message) => (dispatch, getState) => dispatch(
  setMessages(
    getState().messages.messages.filter((val) => val !== message)
  )
);
