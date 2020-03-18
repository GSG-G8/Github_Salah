import React from 'react';
import logo from '../load.gif';
import '../App.css';

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading</p>
      </header>
    </div>
  );
}
export default Loading;
