import {User} from './user';
import {AnyAction} from 'redux';

export const SET_USERS = 'SET_USERS';
export const RESET = 'RESET';

export const getUsers = (): User[] => {
  const users = localStorage.getItem(SET_USERS) || [];
  return users.length ? JSON.parse(users as string) : users;
};

const initialState: User[] = getUsers();

export default (state = initialState, action: AnyAction): User[] => {
  switch (action.type) {
    case SET_USERS:
      return action.payload.users;
    case RESET:
      return (state = getUsers());

    default:
      return state;
  }
};

export const setUsers = (users: User[]): AnyAction => {
  localStorage.setItem(SET_USERS, JSON.stringify(users));
  return {type: SET_USERS, payload: {users}};
};
