import {createSelector} from 'reselect';
import {RootState} from '../reducers';

export const selectCards = createSelector(
  (state: RootState) => state.cards,
  cards => cards
);
