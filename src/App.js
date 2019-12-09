import React, { Component } from 'react';
import './App.scss';
import List from './components/List';
import Note from './components/Note';
import Nav from './components/Nav';
import notes from './assets/data/notes.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    // UPDATING STATE ONCLICK
    this.setState({
      clicked: !this.clicked,
    });
    // RETURNING CLICKED TEXT
    const note = notes.map(note => {
      return note.text;
    });
    console.log('Noted rendered on click:', note);
    return note;
  }

  renderNote = () => {
    const note = notes.map( (note) => {
      return (
          note.text
      );
    });
    console.log(this.state);
    if (this.state.clicked == false) {
      return <Note text={note[1]} />
    } else {
      return <Note text={note[0]} />
    }
  }

  renderList = () => {
    
    const noteItem = notes.map( (note) => {
      return (
        <List note={note} handleClick={this.handleClick} />
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
