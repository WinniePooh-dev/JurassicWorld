import {Tooltip} from '@material-ui/core';
import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  arrow?: boolean;
  children: ReactNode;
  background?: string;
  color?: string;
  padding?: number;
  fontSize?: number;
  placement?: string;
}

const StyledTooltip = styled(props => (
  <Tooltip {...props} classes={{popper: props.className, tooltip: 'tooltip', arrow: 'arrow'}} />
))`
  & .tooltip {
    padding: ${props => props.padding}px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    font-family: 'Roboto', 'Oxygen', 'Ubuntu', cursive;
    font-size: ${props => props.fontSize}rem;
    letter-spacing: normal;
    border-radius: 1rem;
  }

  & .arrow {
    color: ${props => props.background};
  }
`;

export const JurassicTooltip = (props: Props): JSX.Element => {
  return <StyledTooltip {...props}>{props.children}</StyledTooltip>;
};
