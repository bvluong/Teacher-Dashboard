import { RECEIVE_ASSIGNEMENTS } from '../actions/assignment_actions';
import { merge } from 'lodash';

const defaultState = {

};

const assignmentReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSIGNEMENTS:
      let newState = {};
      action.assignments.forEach( el => {
        newState[el.id] = {
          id: el.id,
          title: el.title,
          description: el.description,
          due_at: el.due_at
        };
      });
      return merge({}, defaultState, newState );
    default:
      return state;
  }
};

export default assignmentReducer;
