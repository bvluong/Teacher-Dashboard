import * as AssignmentAPIUtil from '../util/assignment_api_util';

export const RECEIVE_ASSIGNMENTS = "RECEIVE_ASSIGNMENTS";
export const RECEIVE_ASSIGNMENT = "RECEIVE_ASSIGNMENT";

export const receiveAssignments = assignments => ({
  type: RECEIVE_ASSIGNMENTS,
  assignments
});

export const receiveAssignment = assignment => ({
  type: RECEIVE_ASSIGNMENT,
  assignment
});

export const fetchAssignments = () => dispatch => (
  AssignmentAPIUtil.fetchAssignments()
  .then(assignments => dispatch(receiveAssignments(assignments)))
);

export const fetchAssignment = (id) => dispatch => (
  AssignmentAPIUtil.fetchAssignment(id)
  .then(assignment => dispatch(receiveAssignment(assignment)))
);
