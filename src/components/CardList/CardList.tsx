import React from 'react';
import {useSelector} from 'react-redux';
import {selectCards} from '../../selectors/cards';
import {Card} from './Card';

export const CardList = (): JSX.Element => {
  const cardlist = useSelector(selectCards);

  return (
    <>
      {cardlist.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
};
