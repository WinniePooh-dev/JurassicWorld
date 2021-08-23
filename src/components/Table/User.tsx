import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {JurassicTooltip, StyledDeleteIcon} from '../../@UI';
import {Colors} from '../../GlobalStyle';
import {timelimit} from '../../reducers/ui';
import {User} from '../../reducers/user';
import {setUsers} from '../../reducers/users';
import {selectUsers} from '../../selectors/users';
import {TD, TR} from './styles';

interface IUsetItem {
  id: number;
  user: User;
}

export const UserItem = ({id, user}: IUsetItem): JSX.Element => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleDeleteItem = (id: number) => {
    const filteredUsers = users.filter(user => user.id !== id);
    dispatch(setUsers(filteredUsers));
  };

  return (
    <TR>
      {Object.entries(user).map(([key, value]) => {
        return (
          <TD key={key} aria-label={key}>
            {key === 'time' && value === 0 ? (
              <Wasted>lost</Wasted>
            ) : key === 'time' ? (
              timelimit - +value + 'sec'
            ) : (
              value
            )}
          </TD>
        );
      })}
      <TD>
        <DeleteItem>
          <JurassicTooltip placement={'left'} title={'remove item'} padding={14} fontSize={1} arrow>
            <StyledDeleteIcon fontSize={'large'} onClick={() => handleDeleteItem(id)} />
          </JurassicTooltip>
        </DeleteItem>
      </TD>
    </TR>
  );
};

const Wasted = styled.span`
  color: ${Colors.errorColor};
`;

const DeleteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
