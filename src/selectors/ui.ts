import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectLoading = createSelector(
  (state: RootState) => state.ui,
  ui => ui.loading
);
