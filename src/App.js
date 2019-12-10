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
      note: 1,
  }
}


  handleClick = () => {
    // UPDATING STATE ONCLICK
    this.setState({
      clicked: !this.clicked,
      note: '',
    });
  }

  // Update this.state.note to index clicked
  renderNote = () => {
    for(let i = 0; i <= notes.length; i++) {
      return <Note text={notes[this.state.note].text} />
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
