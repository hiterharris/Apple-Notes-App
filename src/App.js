import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="app-container">
          <List />
          <Note />
        </div>
      </div>
    );
  }
}
