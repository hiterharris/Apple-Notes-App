import React, { Component } from 'react';
import '../App.css';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const noteItem = this.props.notes.map( (note) => {
      return (
        <div className="list-item">
          <h1>{note.title}</h1>
          <p>{note.date}</p>
        </div>

      );
    });

    return (
      <div className="list">
        <div>
          {noteItem}
        </div>

      </div>
    );
  }
}
