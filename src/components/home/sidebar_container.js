import { connect } from 'react-redux';
import SideBar from './sidebar';
import { fetchAssignments, fetchAssignment } from '../../actions/assignment_actions';

const mapStateToProps = ({ assignments, currentAssign }) => (
  {
    assignments,
    currentAssign
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchAssignments: () => dispatch(fetchAssignments()),
    fetchAssignment: (id) => dispatch(fetchAssignment(id))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
