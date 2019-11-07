import React, { Component } from 'react';
import '../App.scss';
import traffic from '../assets/img/icons/traffic.png'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="window-icons">
          <img src={traffic} alt="Window Icons" />
        </div>
        <div className="note-icons">
          <img src={require('../assets/img/icons/sidebar-toggle.png')} alt="Sidebar Toggle Icon" />
          <img src={require('../assets/img/icons/view-toggle.png')} alt="Change View Icon" />
          <img src={require('../assets/img/icons/trash.png')} alt="Trash Icon" />
          <img src={require('../assets/img/icons/note.png')} alt="New Note Icon" />
          <img src={require('../assets/img/icons/check.png')} alt="Checklist Item Icon" />
          <img src={require('../assets/img/icons/lock.png')} alt="Lock Icon" />
        </div>
        <div className="search-bar">
          <input placeholder="Search" ></input>
        </div>
      </div>
    );
  }
}
