import React, {FC, ReactElement} from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../selectors/user';
import {selectUsers} from '../../selectors/users';
import {Table, TH, Thead, TR} from './styles';
import {UserList} from './UserList';

const JurassicTable: FC = (): ReactElement | null => {
  const users = useSelector(selectUsers);
  const user = useSelector(selectUser);
  const headers = Object.keys(user);

  if (!users.length) {
    return null;
  }

  return (
    <Table>
      <Thead>
        <TR>
          {headers
            .filter(header => header !== 'id')
            .map((header, idx) => (
              <TH key={idx}>{header}</TH>
            ))}
          <TH />
        </TR>
      </Thead>
      <UserList users={users} />
    </Table>
  );
};

export default JurassicTable;
