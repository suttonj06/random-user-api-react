import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import { getRandomUsers } from '../../User';

export class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {fetching: true};
  }

  componentWillMount() {
      //request random users
      //set state to fetching
    getRandomUsers(5)
      .then( data => {
        this.setState({
          users: data,
          fetching: false
        });
      });
  }

  renderUserItems() {
    return this.state.users.map((user, index) => {
      const first = user.name.first;
      const last = user.name.last;
      return (
        <UserItem
          key={first+last+index}
          title={user.name.title}
          firstName={first}
          lastName={last}
          thumbnail={user.picture.thumbnail}/>
      );
    });
  }

  render () {
    if(this.state.fetching) {
      //show loader
      return (
        <div>
          <img src='../../../img/loading.gif'/>
        </div>
      );
    }

    return (
      <div className="header">
        <h2>Users</h2>
        <ul>
          {this.renderUserItems()}
        </ul>
      </div>
    );
  }
}
