import {rgba} from 'polished';
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {StyledLinearProgress} from '../@UI';
import {Colors} from '../GlobalStyle';
import {Timer} from './Timer';

const {mainColor, titleColor} = Colors;

export const Header = (): JSX.Element => {
  return (
    <Fragment>
      <StyledHeader>
        <Timer />
        <Title>Jurassic world*</Title>
      </StyledHeader>
      <StyledLinearProgress />
    </Fragment>
  );
};

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 170px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-evenly;
  background: ${rgba(mainColor, 0.9)};
  font-size: 10rem;
  letter-spacing: 1rem;
  color: ${titleColor};
  z-index: 999;
`;

const Title = styled.span`
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
