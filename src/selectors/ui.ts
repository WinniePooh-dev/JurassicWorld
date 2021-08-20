import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectLoading = createSelector(
  (state: RootState) => state.ui,
  ui => ui.loading
);

export const selectTimer = createSelector(
  (state: RootState) => state.ui,
  ui => ui.timer
);
