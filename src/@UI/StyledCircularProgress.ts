import {CircularProgress} from '@material-ui/core';
import styled from 'styled-components';
import {Colors} from '../GlobalStyle';

export const StyledCircularProgress = styled(CircularProgress)<{color?: string}>`
  color: ${p => p.color || Colors.mainColor};
`;
