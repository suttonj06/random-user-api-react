import React, { Component, PropTypes } from 'react';
import './UserItem.css';

export default class UserItem extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string
  };
  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const title = this.props.title;
    const thumbnailPicture = this.props.thumbnail;
    return (
      <div className="user-item-container">
        <img src={thumbnailPicture}/>
        <div>{title} {firstName} {lastName}</div>
      </div>
    );
  }
}
