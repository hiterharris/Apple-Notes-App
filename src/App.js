import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import notes from './assets/notes.json';

const note = notes.map(function (note) {
  return (
      note
  );
});
// console.log(note);


export default class App extends Component {
  render() {

    return (
      <div className="app">
        <Nav />
        <div className="app-container">
          <List notes={note} />
          <Note notes={note} />
        </div>
      </div>
    );
  }
}
