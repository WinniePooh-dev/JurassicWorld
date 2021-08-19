import {LinearProgress} from '@material-ui/core';
import styled from 'styled-components';
import {Colors} from '../GlobalStyle';

const {errorColor, thirdColor} = Colors;

export const StyledLinearProgress = styled(LinearProgress)`
  position: sticky;
  top: 170px;
  height: 8px;
  background: ${thirdColor};
  .MuiLinearProgress-bar {
    background-color: ${errorColor};
  }
`;
