import { RECEIVE_ASSIGNEMENTS } from '../actions/assignment_actions';
import { merge } from 'lodash';

const defaultState = {
};

const assignmentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSIGNEMENTS:
      console.log(action);
      return merge({}, defaultState, action );
    default:
      return state;
  }
};

export default assignmentReducer;
