import React from 'react';
import Header from './components/header';
import Members from './components/members';

class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    data: '',
  };

  render() {
    // const { data } = this.state;
    return (
      <div>
        <Header />
        <Members />
      </div>
    );
  }
}

export default App;
