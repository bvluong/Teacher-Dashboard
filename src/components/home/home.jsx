import React from 'react';
import axios from 'axios';
import SideBarContainer from './sidebar_container';


class Home extends React.Component {

  render () {

  // axios.get('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d')
  // .then(function (response) {
  //   console.log(response.data);
  // });

    return (
    <div className='home'>
      <SideBarContainer/>
    </div>
    );
  }
}

export default Home;
