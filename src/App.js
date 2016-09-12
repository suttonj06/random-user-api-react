import React, { Component } from 'react';
import { UserList } from './components/UserList/UserList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Random User API</h1>
        <UserList />
      </div>
    )
  }
}

export default App;
