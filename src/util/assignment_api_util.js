import axios from 'axios';

export const fetchAssignments = () => (
  axios.get('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d')
  .then( (response) => response.data)
);



export const fetchAssignment = (id) => (
  axios.get(`https://api.edmodo.com/assignment_submissions?assignment_id=${id}&assign
  ment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b530
  0cf7f7f3a02010e99c84695d`)
  .then( (response) => response.data)
);
