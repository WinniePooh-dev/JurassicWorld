import {Paper} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {Button} from '../@UI';
import {Colors} from '../GlobalStyle';

const Game = (): JSX.Element => {
  return (
    <StyledGame>
      <Button>Start the game</Button>
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 3em);
  background-color: ${Colors.background};
  border-radius: 14px 14px 0 0;
  box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.3);
  height: 100%;
  margin: 3em auto;

  @media screen and (max-width: 1440px) {
    border-radius: 0;
    width: 100%;
  }
`;
