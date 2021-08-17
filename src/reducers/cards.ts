import {AnyAction} from 'redux';

export interface Card {
  id: string;
  type: number;
  img: string;
}

const initialState: Card[] = [];

export const SET_CARDS = 'SET_CARDS';

export default (state = initialState, action: AnyAction): Card[] => {
  switch (action.type) {
    case SET_CARDS:
      return action.payload.cards;

    default:
      return state;
  }
};

export const setCards = (cards: Card[]): AnyAction => {
  return {type: SET_CARDS, payload: {cards}};
};
