import {Paper} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Button} from '../@UI';
import {Colors} from '../GlobalStyle';
import {CardList} from './CardList';

const Game = (): JSX.Element => {
  const [startGame, setStartGame] = useState(false);
  const [stopGame, setStopGame] = useState(false);

  const onStatrtGame = () => {
    setStartGame(true);
  };

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
