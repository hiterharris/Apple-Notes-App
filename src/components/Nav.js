import React, { Component } from 'react';
import '../App.scss';
import traffic from '../assets/img/icons/traffic.png'

export default class Nav extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: []
    // };
    // this.addItem = this.addItem.bind(this);
  }

  // addItem(e) {
  //   if (this._inputElement.value !== "") {
  //     var newItem = {
  //       text: this._inputElement.value,
  //       key: Date.now()
  //     };
  //   }

  //   this.setState(prevState => {
  //     return {
  //       items: prevState.items.concat(newItem)
  //     };
  //   });

  //   this._inputElement.value = "";

  //   console.log(this.state.items);

  //   e.preventDefault();
  // }

  render() {
    // console.log(this.props.addItem);
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
          {/* <form onSubmit={() => this.props.addItem}>
            <input
              ref={a => (this.props.addItem._inputElement = a)}
              placeholder="Search"
            />
            <button type="submit">add</button>
          </form> */}
          <form>
            <input
              placeholder="Search"
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
