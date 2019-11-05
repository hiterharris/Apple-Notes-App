import React, { Component } from 'react';
import './App.css';
import ListItem from './components/ListItem';
import Note from './components/Note';
import Nav from './components/Nav';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="app-container">
          <ListItem />
          <Note />
        </div>
      </div>
    );
  }
}
