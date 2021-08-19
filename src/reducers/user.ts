import {AnyAction} from 'redux';

export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface User {
  name: string;
  age: number;
  gender: Gender;
  time?: number;
}

const initialState: User = {
  name: '',
  age: 0,
  gender: Gender.Male,
  time: undefined
};

export const SET_USER = 'SET_USER';

export default (state = initialState, action: AnyAction): User => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload.user};

    default:
      return state;
  }
};

export const setUser = (user: User): AnyAction => {
  return {type: SET_USER, payload: {user}};
};
