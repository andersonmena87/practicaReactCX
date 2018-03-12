// Dependencies
import { combineReducers } from 'redux';

// Share Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device
});

export default rootReducer;