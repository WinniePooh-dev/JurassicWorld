import {AnyAction, CombinedState, combineReducers} from 'redux';
import cards, {ICard} from './cards';
import user, {User} from './user';
import users, {RESET} from './users';
import ui, {UI} from './ui';

type AnyState = CombinedState<{cards: ICard[]; user: User; users: User[]; ui: UI}> | undefined;

const appReducer = combineReducers({
  cards,
  user,
  users,
  ui
});

const rootReducer = (state: AnyState, action: AnyAction): RootState => {
  if (action.type === RESET) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
