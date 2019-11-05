import React, { Component } from 'react';
import '../App.css';

export default class Note extends Component {


  constructor(props) {
    super(props);
    this.state={
      value: '',
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
      <div>
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

      // <div className="note">
      //   {this.state.value}
      // </div>