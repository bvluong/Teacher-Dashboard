import { combineReducers } from 'redux';
import assignmentReducer from './assignment_reducer';

const rootReducer = combineReducers({
  assignments: assignmentReducer
});

export default rootReducer;
