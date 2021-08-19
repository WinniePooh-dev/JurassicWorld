import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectUser = createSelector(
  (state: RootState) => state.user,
  user => user
);
