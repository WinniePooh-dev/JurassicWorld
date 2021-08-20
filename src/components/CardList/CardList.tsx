import React, {useEffect, useState} from 'react';
import {Card, ICard} from './Card';
import {Colors} from '../../GlobalStyle';
import {darken, lighten} from 'polished';

import velociraptor from '../../assets/icons/velociraptor.svg';
import triceratops from '../../assets/icons/triceratops.svg';
import stegosaurus from '../../assets/icons/stegosaurus.svg';
import spinosaurus from '../../assets/icons/spinosaurus.svg';
import diplodocus from '../../assets/icons/diplodocus.svg';
import pterodactyl from '../../assets/icons/pterodactyl.svg';
import gorgosaurus from '../../assets/icons/gorgosaurus.svg';
import elasmosaurus from '../../assets/icons/elasmosaurus.svg';
import ankylosaurus from '../../assets/icons/ankylosaurus.svg';
import mammoth from '../../assets/icons/mammoth.svg';

const {thirdColor, successColor, attentionColor, cautionColor, errorColor, fourthColor, textColor} =
  Colors;

export const CardList = (): JSX.Element => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    setCards(shuffle(cardList));
  }, []);

  return (
    <>
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
};

const cardList = [
  {id: 1, type: 'velociraptor', icon: velociraptor, color: darken(0.2, thirdColor), size: 300},
  {id: 2, type: 'triceratops', icon: triceratops, color: darken(0.1, successColor), size: 200},
  {id: 3, type: 'stegosaurus', icon: stegosaurus, color: darken(0.2, fourthColor), size: 320},
  {id: 4, type: 'spinosaurus', icon: spinosaurus, color: errorColor, size: 300},
  {id: 5, type: 'diplodocus', icon: diplodocus, color: lighten(0.2, textColor), size: 300},
  {id: 6, type: 'pterodactyl', icon: pterodactyl, color: cautionColor, size: 300},
  {id: 7, type: 'gorgosaurus', icon: gorgosaurus, color: darken(0.2, attentionColor), size: 220},
  {id: 8, type: 'elasmosaurus', icon: elasmosaurus, size: 300},
  {id: 9, type: 'ankylosaurus', icon: ankylosaurus, color: lighten(0.3, successColor), size: 320},
  {id: 10, type: 'mammoth', icon: mammoth, color: '#964B00', size: 320},

  {id: 11, type: 'velociraptor', icon: velociraptor, color: darken(0.2, thirdColor), size: 300},
  {id: 12, type: 'triceratops', icon: triceratops, color: darken(0.1, successColor), size: 200},
  {id: 13, type: 'stegosaurus', icon: stegosaurus, color: darken(0.2, fourthColor), size: 320},
  {id: 14, type: 'spinosaurus', icon: spinosaurus, color: errorColor, size: 300},
  {id: 15, type: 'diplodocus', icon: diplodocus, color: lighten(0.2, textColor), size: 300},
  {id: 16, type: 'pterodactyl', icon: pterodactyl, color: cautionColor, size: 300},
  {id: 17, type: 'gorgosaurus', icon: gorgosaurus, color: darken(0.2, attentionColor), size: 220},
  {id: 18, type: 'elasmosaurus', icon: elasmosaurus, size: 300},
  {id: 19, type: 'ankylosaurus', icon: ankylosaurus, color: lighten(0.3, successColor), size: 320},
  {id: 20, type: 'mammoth', icon: mammoth, color: '#964B00', size: 320}
];

const shuffle = (arr: Array<ICard>) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};
