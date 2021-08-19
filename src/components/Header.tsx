import {rgba} from 'polished';
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {StyledLinearProgress} from '../@UI';
import {Colors} from '../GlobalStyle';
import {selectLoading} from '../selectors/ui';
import {Timer} from './Timer';

const {mainColor, titleColor} = Colors;

export const Header = (): JSX.Element => {
  const loading = useSelector(selectLoading);
  return (
    <Fragment>
      <StyledHeader>
        <Timer />
        <Title>Jurassic world*</Title>
      </StyledHeader>
      {loading ? <StyledLinearProgress /> : null}
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
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;
