import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="list-item" onClick={this.props.handleClick}>
          <h2>{this.props.note.title}</h2>
          <p>{this.props.note.date}</p>
        </div>
    );
  }
}
