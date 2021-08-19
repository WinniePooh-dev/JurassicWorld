import {Typography} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const StyledTypography = styled(({color, ...props}) => (
  <Typography color={color} {...props} />
))`
  color: ${p => p.color || '#ff0000'};
  font-family: Jurassic Park;
`;
