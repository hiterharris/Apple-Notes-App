import React, { Component } from 'react';
import '../App.css';
import notes from '../assets/notes.json';

export default class ListItem extends Component {
  render() {

    const note = notes.map(function (note) {
      return (
        <div>
          <h1>{note.title}</h1>
          <p>{note.date}</p>
        </div>
      );
    });

    console.log(note);

    return (
      <div className="ListItem">
        {note}
      </div>
    );
  }
}
