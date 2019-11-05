import React, { Component } from 'react';
import {UserItem} from '../users/UserItem';

export interface UsersProps {
    users: any[],
    loading: boolean
}

export class Users extends Component<UsersProps> {

  defaultProps = {
   users: [],
    loading: false
};

  render() {
    return (
      <div style={userStyle}> 
        {this.props.users.map( (user) => (
              <UserItem key={user.id} user={user}  />
    ))}
      
      </div>
    );
  }
}


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};