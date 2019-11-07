import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
    console.log(props.listItemClicked);
  }

  render() {
    return (
      <div className="list">
        <div>
          {this.props.noteItem}
        </div>
      </div>
    );
  }
}
