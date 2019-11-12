import React, { Component } from 'react';
import './App.scss';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import notes from './assets/data/notes.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      bgColor: "#FCFCF8",
      listItemSelected: false,
    }
  }

  listItemSelected = () => {
    this.setState({
      listItemSelected: true,
    })
  }

  renderNote = () => {
    const note = notes.map( (note) => {
      return (
          note.text
      );
    });
    return this.state.listItemSelected ? <Note text={note[1]} /> : <Note text={note[0]} />
  }

  render() {
    const noteItem = notes.map( (note) => {
      return (
        <div className="list-item">
          <h2>{note.title}</h2>
          <p>{note.date}</p>
        </div>

      );
    });


    return (
      <div className="app">
        <Nav />
        <div className="app-container">
          <List noteItem={noteItem} />
          {this.renderNote()}
        </div>
      </div>
    );
  }
}
