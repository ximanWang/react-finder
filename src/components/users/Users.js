import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'ida',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/13268272?s=460&v=4',
        html_url: 'https://github.com/ximanWang'
      },
      {
        id: '2',
        login: 'idaa',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/13268272?s=460&v=4',
        html_url: 'https://github.com/ximanWang'
      },
      {
        id: '3',
        login: 'idaaa',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/13268272?s=460&v=4',
        html_url: 'https://github.com/ximanWang'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gripGap: '1rem'
};

export default Users;
