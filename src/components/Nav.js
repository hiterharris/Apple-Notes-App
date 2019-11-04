import React, { Component } from 'react';
import '../App.css';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="window-icons">Window Icons Here</div>
        <div className="note-icons">Note Icons Here</div>
        <div className="search-bar">Search Bar Here</div>
      </div>
    );
  }
}
