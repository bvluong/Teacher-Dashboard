import React from 'react';
import SideBarDetail from './sidebar_detail';
import { values } from 'lodash';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAssignments();
  }

  mapAssignDetails() {
    return values(this.props.assignments).map(assign =>
      <SideBarDetail key={assign.id} details={assign} />
    );
  }

  render() {
    return (
      <div className='sidebar'>
        <ul className='sidebar-index'>
          {this.mapAssignDetails()}
        </ul>
      </div>
    );
  }
}

export default SideBar;
