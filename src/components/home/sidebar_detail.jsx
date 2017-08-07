import React from 'react';

class SideBarDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, id, due_at } = this.props.details;
    let date = new Date(due_at);
    return (
      <li className='sidebar-detail'>
        <h4 className='detail-title'>
          {title}
        </h4>
        <h5 className='detail-due'>
          due {date.toDateString()}
        </h5>
      </li>
    );
  }
}

export default SideBarDetail;
