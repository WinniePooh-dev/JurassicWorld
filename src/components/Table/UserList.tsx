import React, {ReactElement} from 'react';
import {User} from '../../reducers/user';
import {TBody} from './styles';
import {UserItem as Item} from './User';

interface Users {
  users: Array<User>;
}

export const UserList = ({users}: Users): ReactElement => {
  return (
    <TBody>
      {users.map(user => {
        const {id, ...rest} = user;
        return <Item key={id} id={id as number} user={rest} />
      })}
    </TBody>
  );
};
