import React, { Component } from 'react';
import './App.scss';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import notes from './assets/data/notes.json';

export default class App extends Component {

  renderNote = () => {
    const note = notes.map( (note) => {
      return (
          note.text
      );
    });
    return <Note text={note[0]} />
  }

  renderList = () => {
    const noteItem = notes.map( (note) => {
      return (
        <List note={note} />
      );
    });
    return noteItem;
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <div className="app-container">

          <div className="list" >
            {this.renderList()}
          </div>
          
          <div className="note">
            {this.renderNote()}
          </div>

        </div>
      </div>
    );
  }
}
