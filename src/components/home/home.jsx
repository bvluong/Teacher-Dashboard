import React from 'react';
import axios from 'axios';
import SideBarContainer from './sidebar_container';


class Home extends React.Component {

  render () {
    return (
    <div className='home'>
      <SideBarContainer/>
    </div>
    );
  }
}

export default Home;
