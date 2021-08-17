import {combineReducers} from 'redux';
import cards from './cards';

const rootReducer = combineReducers({
  cards
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
