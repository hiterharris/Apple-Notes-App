import React, { Component } from 'react';
import '../App.css';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: props.text,
      isInEditMode: false,
    }
  }

  changedEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  }

  renderEditView = () => {
    return (
      <div class="note">
        <textarea
          type="text"
          defaultValue={this.state.value}
          ref="textInput"
        />
      </div>
    );
  }

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changedEditMode()}>
        {this.state.value}
      </div>
    );
  }

  render() {
    return this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView();
  }
}
