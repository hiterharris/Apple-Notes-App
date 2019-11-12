import React, { Component } from 'react';
import '../App.scss';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        {/* <div>
          {this.props.noteItem}
        </div> */}
        <div>
          {this.props.noteItem[0]}
        </div>
        <div className="note-item">
          {this.props.noteItem[1]}
        </div>
      </div>
    );
  }
}
