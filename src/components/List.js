import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

  }

  noteClicked() {
    let noteText = [];
    for(let i = 0; i <= this.props.note.length; i++) {
      noteText.push(this.props.note[i].text);
    }
    console.log(noteText);
    return noteText;
  }
  
  render() {
    return (
        <div className="list-item" onClick={this.props.handleClick} onClick={() => this.noteClicked()}>
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.date}</p>
        </div>
    );
  }
}
