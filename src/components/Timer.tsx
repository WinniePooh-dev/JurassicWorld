import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {JurassicTooltip} from '../@UI';
import {selectTimer} from '../selectors/ui';

export const Timer = (): JSX.Element => {
  const timer = useSelector(selectTimer);
  return (
    <Fragment>
      <StyledTimer>{timer}+</StyledTimer>
      <JurassicTooltip title={'timer'} padding={12} fontSize={2} arrow>
        <FormatTimer>{timer}</FormatTimer>
      </JurassicTooltip>
    </Fragment>
  );
};

const StyledTimer = styled.span``;

const FormatTimer = styled.span`
  cursor: help;
  font-family: Roboto, Oxygen, Ubuntu, cursive;
  font-size: 3rem;
  font-weight: bold;
`;
