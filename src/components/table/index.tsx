import React from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../selectors/user';
import {selectUsers} from '../../selectors/users';
import {Table, TBody, TH, Thead, TR} from './styles';

const JurassicTable = (): JSX.Element | null => {
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
          {headers.map((header, idx) => (
            <TH key={idx}>{header}</TH>
          ))}
        </TR>
      </Thead>
      <TBody></TBody>
    </Table>
  );
};

export default JurassicTable;
