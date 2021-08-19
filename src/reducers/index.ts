import {combineReducers} from 'redux';
import cards from './cards';
import user from './user';
import users from './users';
import ui from './ui';

const rootReducer = combineReducers({
  cards,
  user,
  users,
  ui
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
