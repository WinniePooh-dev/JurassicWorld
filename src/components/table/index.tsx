import React from 'react';
import {useSelector} from 'react-redux';
import {selectUser} from '../../selectors/user';
import {selectUsers} from '../../selectors/users';
import {Table, TBody, TD, TH, Thead, TR} from './styles';

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
      <TBody>
        {users.map((user, idx) => (
          <TR key={idx}>
            {Object.entries(user).map(([key, value]) => {
              return (
                <TD key={key} aria-label={key}>
                  {value}
                </TD>
              );
            })}
          </TR>
        ))}
      </TBody>
    </Table>
  );
};

export default JurassicTable;
