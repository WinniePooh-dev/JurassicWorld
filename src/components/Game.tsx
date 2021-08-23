import {Paper} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {Button, StyledCloseIcon, StyledDialog, StyledTypography} from '../@UI';
import {Colors} from '../GlobalStyle';
import {setTimer} from '../reducers/ui';
import {RESET, setUsers} from '../reducers/users';
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
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>('');

  const onStatrtGame = () => {
    setStartGame(true);
  };

  const onStopGame = () => {
    setStopGame(true);
    setStartGame(false);
  };

  useEffect(() => {
    if (!cards.length) {
      onStopGame();
      handleOpen('You won!');
    }
  }, [cards]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (timer > 0 && startGame) {
      timeout = setTimeout(() => dispatch(setTimer(timer - 1)), 1000);
    } else if (timer === 0) {
      setStopGame(true);
      handleOpen('Time is over!');
    }
    return () => clearTimeout(timeout);
  }, [timer, startGame, stopGame]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (stopGame) {
      dispatch(setUsers([...users, {...user, ...{time: timer}}]));
      timeout = setTimeout(() => {
        history.push('/user_form');
        // window.location.reload();
        dispatch({type: RESET});
      }, 3500);
    }
    return () => clearTimeout(timeout);
  }, [stopGame, setStopGame]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (content: string) => {
    setOpen(true);
    setModalContent(content);
    setTimeout(() => setOpen(false), 3000);
  };

  if (startGame) {
    return (
      <StyledGame>
        <CardList />
        <StyledDialog open={open} onClose={handleClose}>
          <StyledTypography variant="h3" component="h3">
            {modalContent}
          </StyledTypography>
          <StyledCloseIcon onClick={handleClose} />
        </StyledDialog>
      </StyledGame>
    );
  }

  return (
    <StyledGame>
      <Button onClick={onStatrtGame}>Start the game</Button>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledTypography variant="h3" component="h3">
          {modalContent}
        </StyledTypography>
        <StyledCloseIcon onClick={handleClose} />
      </StyledDialog>
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
