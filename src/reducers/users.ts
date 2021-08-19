import {User} from './user';
import {AnyAction} from 'redux';

const initialState: User[] = [];

export const SET_USERS = 'SET_USERS';

export default (state = initialState, action: AnyAction): User[] => {
  switch (action.type) {
    case SET_USERS:
      return action.payload.users;

    default:
      return state;
  }
};

export const setUsers = (users: User[], user: User): AnyAction => {
  return {type: SET_USERS, payload: [...users, user]};
};
