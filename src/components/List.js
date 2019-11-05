import React, { Component } from 'react';
import '../App.css';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        <div onClick={this.props.listItemClicked}>
          {this.props.noteItem}
        </div>
      </div>
    );
  }
}
