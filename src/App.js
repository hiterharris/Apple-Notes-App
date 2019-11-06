import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import notes from './assets/data/notes.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      listItemClicked: false,
    }
  }

  renderListItem = () => {
    const note = notes.map( (note) => {
      return (
          note.text
      );
    });
    return this.state.listItemClicked ? <Note text={note[1]} /> : <Note text={note[0]} />
  }

  listItemClicked = () => {
    this.setState({
      listItemClicked: !this.state.listItemClicked,
    })
  }
  
  render() {
    const noteItem = notes.map( (note) => {
      return (
        <div className="list-item">
          <h1>{note.title}</h1>
          <p>{note.date}</p>
        </div>

      );
    });



    return (
      <div className="app">
        <Nav />
        <div className="app-container">
          <List noteItem={noteItem} listItemClicked={this.state.listItemClicked} />
          {this.renderListItem()}
        </div>
      </div>
    );
  }
}
