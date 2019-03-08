import { createStore, combineReducers } from 'redux';
import statusReducer from './StatusReducer';

const rootReducer = combineReducers({
  current_location: statusReducer,
  current_conversation: statusReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
