import React, {useEffect, useRef, useState} from 'react';
import {Icon} from '../../@UI';
import {StyledCard} from './styles';
import jurassicWorld from '../../assets/icons/jurassic-world.svg';
import {ICard, setCards, updateCards} from '../../reducers/cards';
import {useDispatch, useSelector} from 'react-redux';
import {selectCards, selectOpenedCards} from '../../selectors/cards';
import {useMemo} from 'react';

export enum SideCard {
  Back = 'back',
  Face = 'face'
}

export const Card = ({id, icon, color, size}: ICard): JSX.Element => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const openedCards = useSelector(selectOpenedCards);
  const [side, setSide] = useState<SideCard>(SideCard.Back);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const resetCards = useMemo(
    () =>
      cards.map(card => {
        return {...card, isOpen: false};
      }),
    [cards]
  );

  const onChangeSide = () => {
    if (openedCards.length < 2) {
      setSide(SideCard.Face);
      dispatch(updateCards(cards, id, true));
    }
  };

  useEffect(() => {
    if (!openedCards.length) {
      setSide(SideCard.Back);
    } else if (openedCards.length === 2 && openedCards[0].type === openedCards[1].type) {
      const filteredCards = cards.filter(card => !openedCards.includes(card));
      setTimeout(() => dispatch(setCards(filteredCards)), 1500);
    } else if (openedCards.length === 2 && openedCards[0].type !== openedCards[1].type) {
      setTimeout(() => dispatch(setCards(resetCards)), 1500);
    }
  }, [openedCards.length]);

  useEffect(() => {
    if (side === SideCard.Face) {
      timeout.current = setTimeout(() => {
        setSide(SideCard.Back);
        dispatch(updateCards(cards, id, false));
      }, 5000);
    }
    return () => clearTimeout(timeout.current as unknown as number);
  }, [side, setSide]);

  if (side === SideCard.Back) {
    return (
      <StyledCard side={side} onClick={onChangeSide}>
        <Icon svg={jurassicWorld} width={300} />
      </StyledCard>
    );
  }

  return (
    <StyledCard side={side}>
      <Icon svg={icon} width={size} color={color} />
    </StyledCard>
  );
};
