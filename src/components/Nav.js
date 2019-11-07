import React, { Component } from 'react';
import '../App.css';
import sidebar from '../assets/img/icons/sidebar-toggle.png';
import view from '../assets/img/icons/view-toggle.png';
import trash from '../assets/img/icons/trash.png';
import note from '../assets/img/icons/note.png';
import check from '../assets/img/icons/check.png';
import lock from '../assets/img/icons/lock.png';
import search from '../assets/img/icons/search.png';

import traffic from '../assets/img/icons/traffic.png'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="window-icons">
          <img src={traffic} />
        </div>
        <div className="note-icons">
          <img src={sidebar} />
          <img src={view} />
          <img src={trash} />
          <img src={note} />
          <img src={check} />
          <img src={lock} />
        </div>
        <div className="search-bar">
          <input placeholder="Search" ></input>
        </div>
      </div>
    );
  }
}
