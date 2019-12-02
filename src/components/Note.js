import React, { Component } from 'react';
import '../App.scss';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: props,
    }
  }

  renderNoteText = () => {
    return (
      <div>
        <textarea
          type="text"
          defaultValue={this.state.value.text}
          ref="textInput"
        />
      </div>
    );
  }

  render() {
    return this.renderNoteText();
  }
}
