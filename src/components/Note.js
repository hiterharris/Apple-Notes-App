import React, { Component } from 'react';
import '../App.scss';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: props,
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
      <div className="note">
        <textarea
          type="text"
          defaultValue={this.state.value.text}
          ref="textInput"
        />
      </div>
    );
  }

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changedEditMode()}>
        {this.state.value.text}
      </div>
    );
  }

  render() {
    return this.state.isInEditMode ? this.renderEditView() : this.renderDefaultView();
  }
}
