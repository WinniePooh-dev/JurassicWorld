import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {JurassicTooltip} from '../@UI';
import {Colors} from '../GlobalStyle';
import {selectTimer} from '../selectors/ui';

export const Timer = (): JSX.Element => {
  const timer = useSelector(selectTimer);
  return (
    <Fragment>
      <span>
        <StyledTimer>{timer}</StyledTimer>
        <Logo>+</Logo>
      </span>
      <JurassicTooltip
        title={'timer'}
        padding={12}
        fontSize={2}
        background={Colors.foreground}
        color={Colors.textColor}>
        <FormatTimer>{timer}</FormatTimer>
      </JurassicTooltip>
    </Fragment>
  );
};

const Logo = styled.span`
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

const StyledTimer = styled.span`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const FormatTimer = styled.span`
  cursor: help;
  font-family: Roboto, Oxygen, Ubuntu, cursive;
  font-size: 3rem;
  font-weight: bold;
`;
