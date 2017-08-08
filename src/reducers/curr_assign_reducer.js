import { RECEIVE_ASSIGNMENT } from '../actions/assignment_actions';
import { merge } from 'lodash';

const defaultState = {

};

const currAssignmentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSIGNMENT:
      console.log(action);
      return merge({}, defaultState, action);
    default:
      return state;
  }
};

export default currAssignmentReducer;
