import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Icon} from '../../@UI';
import {StyledCard} from './styles';
import jurassicWorld from '../../assets/icons/jurassic-world.svg';
import {ICard, setCards, updateCards} from '../../reducers/cards';
import {useDispatch, useSelector} from 'react-redux';
import {selectCards, selectOpenedCards} from '../../selectors/cards';
import {useMemo} from 'react';
import {setLoading} from '../../reducers/ui';
import {selectTimer} from '../../selectors/ui';

export enum SideCard {
  Back = 'back',
  Face = 'face'
}

export const Card = ({id, icon, color, size}: ICard): JSX.Element => {
  const dispatch = useDispatch();
  const [success, setSucces] = useState(false);
  const [failure, setFailure] = useState(false);
  const cards = useSelector(selectCards);
  const timer = useSelector(selectTimer);
  const openedCards = useSelector(selectOpenedCards);
  const [side, setSide] = useState<SideCard>(SideCard.Back);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const onPristinedCard = useCallback(() => dispatch(setCards(resetCards)), [cards]);
  const onFilterCards = useCallback(() => {
    const filteredCards = cards.filter(card => !openedCards.includes(card));
    dispatch(setCards(filteredCards));
  }, [cards]);

  const useTimeout = (func: () => void, delay: number, timer: NodeJS.Timeout): void => {
    dispatch(setLoading(true));
    timeout.current = setTimeout(() => {
      clearTimeout(timer);
      func();
      dispatch(setLoading(false));
      setSucces(false);
      setFailure(false);
    }, delay);
  };

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
    return () => clearTimeout(timeout.current as unknown as number);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!openedCards.length) {
      setSide(SideCard.Back);
    } else if (openedCards.length === 2 && openedCards[0].type === openedCards[1].type) {
      timer = setTimeout(() => setSucces(true), 600);
      useTimeout(onFilterCards, 1500, timer);
    } else if (openedCards.length === 2 && openedCards[0].type !== openedCards[1].type) {
      timer = setTimeout(() => setFailure(true), 600);
      useTimeout(onPristinedCard, 1500, timer);
    }
    return () => clearTimeout(timer);
  }, [openedCards.length]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (side === SideCard.Face) {
      timer = setTimeout(() => {
        clearTimeout(timeout.current as unknown as number);
        setSide(SideCard.Back);
        dispatch(updateCards(cards, id, false));
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [side, setSide]);

  if (side === SideCard.Back) {
    return (
      <StyledCard side={side} onClick={onChangeSide} disabled={!timer}>
        <Icon svg={jurassicWorld} width={300} />
      </StyledCard>
    );
  }

  return (
    <StyledCard side={side} success={success} failure={failure}>
      <Icon svg={icon} width={size} color={color} />
    </StyledCard>
  );
};
