import { connect } from 'react-redux';
import SideBar from './sidebar';
import { fetchAssignments } from '../../actions/assignment_actions';

const mapStateToProps = ({ assignments }) => (
  {
    assignments
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchAssignments: () => dispatch(fetchAssignments())
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
