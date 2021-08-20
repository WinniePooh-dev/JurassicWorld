import React from 'react';
import {Card} from './Card';

import velociraptor from '../../assets/icons/velociraptor.svg';
import triceratops from '../../assets/icons/triceratops.svg';
import stegosaurus from '../../assets/icons/stegosaurus.svg';
import spinosaurus from '../../assets/icons/spinosaurus.svg';
import diplodocus from '../../assets/icons/diplodocus.svg';
import pterodactyl from '../../assets/icons/pterodactyl.svg';
import gorgosaurus from '../../assets/icons/gorgosaurus.svg';
import elasmosaurus from '../../assets/icons/elasmosaurus.svg';
import ankylosaurus from '../../assets/icons/ankylosaurus.svg';

export const CardList = (): JSX.Element => {
  return (
    <>
      {cardList.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
};

const cardList = [
  {id: 1, type: 'velociraptor', icon: velociraptor, color: '#2a6686', size: 300},
  {id: 2, type: 'triceratops', icon: triceratops, color: '#2a6686', size: 200},
  {id: 3, type: 'stegosaurus', icon: stegosaurus, color: '#2a6686', size: 320},
  {id: 4, type: 'spinosaurus', icon: spinosaurus, color: '#2a6686', size: 300},
  {id: 5, type: 'diplodocus', icon: diplodocus, color: '#2a6686', size: 300},
  {id: 6, type: 'pterodactyl', icon: pterodactyl, color: '#2a6686', size: 300},
  {id: 7, type: 'gorgosaurus', icon: gorgosaurus, color: '#2a6686', size: 220},
  {id: 8, type: 'elasmosaurus', icon: elasmosaurus, color: '#2a6686', size: 300},
  {id: 9, type: 'ankylosaurus', icon: ankylosaurus, color: '#2a6686', size: 320}
];
