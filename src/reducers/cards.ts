import {SVGProps} from 'react';
import {AnyAction} from 'redux';
import {darken, lighten} from 'polished';
import {Colors} from '../GlobalStyle';

import velociraptor from '../assets/icons/velociraptor.svg';
import triceratops from '../assets/icons/triceratops.svg';
import stegosaurus from '../assets/icons/stegosaurus.svg';
import spinosaurus from '../assets/icons/spinosaurus.svg';
import diplodocus from '../assets/icons/diplodocus.svg';
import pterodactyl from '../assets/icons/pterodactyl.svg';
import gorgosaurus from '../assets/icons/gorgosaurus.svg';
import elasmosaurus from '../assets/icons/elasmosaurus.svg';
import ankylosaurus from '../assets/icons/ankylosaurus.svg';
import mammoth from '../assets/icons/mammoth.svg';

import uniqueId from '../lib/uniqueId';

const {thirdColor, successColor, attentionColor, cautionColor, errorColor, fourthColor, textColor} =
  Colors;

export interface ICard {
  id: string;
  type: string;
  icon: SVGProps<SVGSVGElement>;
  color?: string;
  size: number;
  isOpen: boolean;
}

const initialState: ICard[] = [
  {
    id: uniqueId('card-'),
    type: 'velociraptor',
    icon: velociraptor,
    color: darken(0.2, thirdColor),
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'triceratops',
    icon: triceratops,
    color: darken(0.1, successColor),
    size: 200,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'stegosaurus',
    icon: stegosaurus,
    color: darken(0.2, fourthColor),
    size: 320,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'spinosaurus',
    icon: spinosaurus,
    color: errorColor,
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'diplodocus',
    icon: diplodocus,
    color: lighten(0.2, textColor),
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'pterodactyl',
    icon: pterodactyl,
    color: cautionColor,
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'gorgosaurus',
    icon: gorgosaurus,
    color: darken(0.2, attentionColor),
    size: 220,
    isOpen: false
  },
  {id: uniqueId('card-'), type: 'elasmosaurus', icon: elasmosaurus, size: 300, isOpen: false},
  {
    id: uniqueId('card-'),
    type: 'ankylosaurus',
    icon: ankylosaurus,
    color: lighten(0.3, successColor),
    size: 320,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'mammoth',
    icon: mammoth,
    color: '#964B00',
    size: 320,
    isOpen: false
  },

  {
    id: uniqueId('card-'),
    type: 'velociraptor',
    icon: velociraptor,
    color: darken(0.2, thirdColor),
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'triceratops',
    icon: triceratops,
    color: darken(0.1, successColor),
    size: 200,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'stegosaurus',
    icon: stegosaurus,
    color: darken(0.2, fourthColor),
    size: 320,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'spinosaurus',
    icon: spinosaurus,
    color: errorColor,
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'diplodocus',
    icon: diplodocus,
    color: lighten(0.2, textColor),
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'pterodactyl',
    icon: pterodactyl,
    color: cautionColor,
    size: 300,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'gorgosaurus',
    icon: gorgosaurus,
    color: darken(0.2, attentionColor),
    size: 220,
    isOpen: false
  },
  {id: uniqueId('card-'), type: 'elasmosaurus', icon: elasmosaurus, size: 300, isOpen: false},
  {
    id: uniqueId('card-'),
    type: 'ankylosaurus',
    icon: ankylosaurus,
    color: lighten(0.3, successColor),
    size: 320,
    isOpen: false
  },
  {
    id: uniqueId('card-'),
    type: 'mammoth',
    icon: mammoth,
    color: '#964B00',
    size: 320,
    isOpen: false
  }
];

export const SET_CARDS = 'SET_CARDS';
export const UPDATE_CARDS = 'UPDATE_CARDS';

export default (state = shuffle(initialState), action: AnyAction): ICard[] => {
  switch (action.type) {
    case SET_CARDS:
      return action.payload.cards;
    case UPDATE_CARDS:
      return action.payload.cards;

    default:
      return state;
  }
};

export const setCards = (cards: ICard[]): AnyAction => {
  return {type: SET_CARDS, payload: {cards}};
};

export const updateCards = (cards: ICard[], id: string, isOpen: boolean): AnyAction => {
  const newCards: ICard[] = cards.map(card => {
    if (card.id === id) {
      return {...card, isOpen: isOpen};
    }
    return card;
  });
  return {type: UPDATE_CARDS, payload: {cards: newCards}};
};

const shuffle = (arr: Array<ICard>) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};
