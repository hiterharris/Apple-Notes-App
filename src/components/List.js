import React, { Component } from 'react';
import '../App.css';

export default class List extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const note = this.props.note;
    return (
      <div className="list-item">
          <h1>{note.title}</h1>
          <p>{note.date}</p>
      </div>
    );
  }
}
