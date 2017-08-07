import * as AssignmentAPIUtil from '../util/assignment_api_util';

export const RECEIVE_ASSIGNEMENTS = "RECEIVE_ASSIGNMENTS";

export const receiveAssignments = assignments => ({
  type: RECEIVE_ASSIGNEMENTS,
  assignments
});


export const fetchAssignments = () => dispatch => (
  AssignmentAPIUtil.fetchAssignments()
  .then(assignments => dispatch(receiveAssignments(assignments)))
);
