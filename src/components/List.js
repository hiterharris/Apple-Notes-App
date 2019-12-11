import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  noteClicked() {
    let noteText = [];
    for(let i = 0; i <= this.props.note.length; i++) {
      noteText.push(this.props.note[i].text);
    }
    return noteText;
  }

  // componentWillUpdate() {
  //   this.setState = {
  //     newNote: this.props.newNote,
  //   }
  // }

  // componentDidUpdate() {
  //   this.state = {
  //     newNote: this.props.newNote,
  //   }
  // }

  newNote() {

  }

  
  render() {
    let text = [];    
    for (let i =0; i <= this.props.newNote.length; i++ ) {
      text.push(this.props.newNote[i]);
    }
    if(!text[0]) {
      console.log('No text');
    } else {
      const renderText = text[0].text;
      console.log(renderText);
      return (
        <div>
        <div className="list-item" onClick={this.props.handleClick} onClick={() => this.noteClicked()}>
          <h2>{renderText}</h2>
          <p>{renderText}</p>
        </div>
      </div>
      );
    }
    return (
      <div>
        <div className="list-item" onClick={this.props.handleClick} onClick={() => this.noteClicked()}>
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.date}</p>
        </div>
        <div>
          <h2>{this.renderText}</h2>
          <p></p>
        </div>
      </div>

    );
  }
}
