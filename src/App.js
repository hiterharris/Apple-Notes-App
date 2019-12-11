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
      items: [],
      clicked: false,
      note: 1,
  }
  this.addItem = this.addItem.bind(this);

}

addItem = (e) => {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
  }

  this.setState(prevState => {
    return {
      items: prevState.items.concat(newItem)
    };
  });

  this._inputElement.value = "";

  e.preventDefault();
  
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
    const noteItem = notes.map( (note, index) => {
      return (
        <List key={index} note={note} notes={notes} handleClick={this.handleClick} newNote={this.state.items}  />
      );
    });
    return noteItem;
    // return (
    //   <List note={notes} handleClick={this.handleClick} newNote={this.state.items}  />
    // );
  }

  render() {

    return (
      <div className="app">
        <Nav />
        <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
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
