import React from 'react';

export interface UserItemProps {
    key: any,
    user: any
}

export const UserItem = (props: UserItemProps) => {
    return (
      <div>
       <img 
       src={props.user.avatar_url}
       alt=""
       className=''
       style={{width: '60px'}}/>

      <h3>{props.user.login}</h3>
      <div>
        <a href={props.user.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>

      </div>
      </div>

    );
}

UserItem.defaultProps = {
    login: 'login',
    avatar_url: 'string',
    html_url: 'string'
};
