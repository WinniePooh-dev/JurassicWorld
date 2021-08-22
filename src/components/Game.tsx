import {Paper} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from '../@UI';
import {Colors} from '../GlobalStyle';
import {setTimer} from '../reducers/ui';
import {setUsers} from '../reducers/users';
import {selectCards} from '../selectors/cards';
import {selectTimer} from '../selectors/ui';
import {selectUser} from '../selectors/user';
import {selectUsers} from '../selectors/users';
import {CardList} from './CardList';

const Game = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const timer = useSelector(selectTimer);
  const users = useSelector(selectUsers);
  const cards = useSelector(selectCards);
  const user = useSelector(selectUser);
  const [startGame, setStartGame] = useState(false);
  const [stopGame, setStopGame] = useState(false);

  const onStatrtGame = () => {
    setStartGame(true);
  };

  const onStopGame = () => {
    setStopGame(true);
    setStartGame(false);
  };

  useEffect(() => {
    if (!cards.length) onStopGame();
  }, [cards]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (timer > 0 && startGame) {
      timeout = setTimeout(() => dispatch(setTimer(timer - 1)), 1000);
    } else if (timer === 0) {
      setStopGame(true);
    }
    return () => clearTimeout(timeout);
  }, [timer, startGame, stopGame]);

  useEffect(() => {
    if (stopGame) {
      dispatch(setUsers([...users, {...user, ...{time: timer}}]));
      setTimeout(() => history.push('/user_form'), 3000);
      window.location.reload();
    }
  }, [stopGame, setStopGame]);

  if (startGame) {
    return (
      <StyledGame>
        <CardList />
      </StyledGame>
    );
  }

  return (
    <StyledGame>
      <Button onClick={onStatrtGame}>Start the game</Button>
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: calc(100% - 3em);
  background-color: ${Colors.background};
  border-radius: 14px;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.3);
  margin: 3em auto;

  @media screen and (max-width: 1440px) {
    border-radius: 0;
    width: 100%;
  }
`;
