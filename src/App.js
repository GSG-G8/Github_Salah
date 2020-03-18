import React from 'react';
import Header from './components/header';

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
      </div>
    );
  }
}

export default App;
