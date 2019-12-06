import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    function handleClick() {
      console.log('TODO: update clicked state');
    }

    return (

        <div className="list-item" onClick={handleClick}>
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.date}</p>
        </div>
    );
  }
}
