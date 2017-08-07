import React from 'react';

class SideBarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, id, due_at } = this.props.details;
    return (
      <li className='sidebar-detail'>
        <h4 className='detail-title'>
          {title}
        </h4>
      </li>
    );
  }
}

export default SideBarDetail;
