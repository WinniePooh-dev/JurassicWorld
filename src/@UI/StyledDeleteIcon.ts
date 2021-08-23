import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

export const StyledDeleteIcon = styled(DeleteIcon)`
  padding: 0px;
  color: #808080;
  cursor: pointer;

  &:hover {
    color: #a9a9a9;
  }

  &:active {
    transform: scale(0.8);
    transition: 0.2s;
  }
`;
