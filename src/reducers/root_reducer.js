import { combineReducers } from 'redux';
import assignmentReducer from './assignment_reducer';
import currAssignmentReducer from './curr_assign_reducer';

const rootReducer = combineReducers({
  assignments: assignmentReducer,
  currentAssign: currAssignmentReducer
});

export default rootReducer;
