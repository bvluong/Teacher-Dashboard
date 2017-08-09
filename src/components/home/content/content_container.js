import { connect } from 'react-redux';
import Content from './content';
import { fetchAssignment } from '../../actions/assignment_actions';

const mapStateToProps = ({ assignments, currentAssign }) => (
  {
    assignments,
    currentAssign
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchAssignment: (id) => dispatch(fetchAssignment(id))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(Content);
