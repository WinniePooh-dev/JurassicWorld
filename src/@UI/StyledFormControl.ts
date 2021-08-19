import {FormControl} from '@material-ui/core';
import styled from 'styled-components';

export const StyledFormControl = styled(FormControl)<{margin?: string}>`
  width: 100%;
  flex-wrap: wrap;
  margin: ${props => props.margin || '5px 0 5px'};
  font-size: 16px;
`;
