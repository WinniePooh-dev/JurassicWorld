import {FormHelperText} from '@material-ui/core';
import styled from 'styled-components';
import {Colors} from '../GlobalStyle';

export const StyledFormTextError = styled(FormHelperText)`
  margin: 5px 0 0;
  color: ${Colors.errorColor};
  font-family: Roboto, Oxygen, Ubuntu, cursive;
  font-size: 13px;
`;
