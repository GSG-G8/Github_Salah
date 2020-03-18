import React from 'react';
import Loading from './loading';

class Header extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    data: '',
  };

  render() {
    const { data } = this.state;
    return <div>{!data && <Loading />}</div>;
  }
}

export default Header;
