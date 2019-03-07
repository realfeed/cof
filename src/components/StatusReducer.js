import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current_location: [],
  current_conversation: [],
};

const statusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  status: statusReducer,
});
