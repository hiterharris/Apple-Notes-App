import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="List-container">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
      </div>
    );
  }
}
