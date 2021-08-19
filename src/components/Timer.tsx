import React, {Fragment} from 'react';
import styled from 'styled-components';
import {JurassicTooltip} from '../@UI';

export const Timer = (): JSX.Element => {
  return (
    <Fragment>
      <StyledTimer>60+</StyledTimer>
      <JurassicTooltip title={'timer'} padding={12} fontSize={2} arrow>
        <FormatTimer>60</FormatTimer>
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
