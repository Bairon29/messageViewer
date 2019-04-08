import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import MessageViewer from './components/messageViewer/MessageViewer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <MessageViewer />
      </div>
    );
  }
}

export default App;
