import { combineReducers } from 'redux';
import { LOCATION_UPDATE } from './types';
import { CONVERSATION_UPDATE } from './types';

const INITIAL_STATE = {
  current_location: [],
  current_conversation: [],
};

const statusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOCATION_UPDATE:
      return {
        ...state,
        current_location: action.payload
      };

      case CONVERSATION_UPDATE:
        return {
          ...state,
          current_conversation: action.payload
        };

    default:
      return state
  }
};

export default combineReducers({
  status: statusReducer,
});
