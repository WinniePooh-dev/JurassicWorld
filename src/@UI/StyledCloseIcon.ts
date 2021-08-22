import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.8);
    transition: 0.2s;
  }
`;
