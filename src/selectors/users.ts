import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectUsers = createSelector(
  (state: RootState) => state.users,
  users => users
);
