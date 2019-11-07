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
    }
  }

  renderListItem = () => {
    const note = notes.map( (note) => {
      return (
          note.text
      );
    });
    return this.state.listItemSelected ? <Note text={note[1]} /> : <Note text={note[0]} />
  }

  listItemClicked = () => {
    this.setState({
      bgColor: "#FBDF8C",
    })
  }
  
  render() {
    const noteItem = notes.map( (note, i) => {
      return (
        <div className="list-item" key={i} style={{backgroundColor: this.state.bgColor}} onClick={this.listItemClicked}>
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
          {this.renderListItem()}
        </div>
      </div>
    );
  }
}
