import {Slide, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import React, {ReactNode} from 'react';
import styled from 'styled-components';

export interface INotification {
  open?: boolean;
  message?: string;
  severity?: 'success' | 'warning' | 'error' | 'info';
  vertical?: 'bottom' | 'top';
  horizontal?: 'left' | 'right' | 'center';
  slide?: 'left' | 'right' | 'up' | 'down' | undefined;
}

interface Props extends INotification {
  onClose: () => void;
}

interface JurassicAlertProps extends Props {
  children: ReactNode | string;
}

const StyledSnackBar = styled(Snackbar)`
  opacity: 0.9;
`;

const StyledAlert = styled(MuiAlert)`
  padding: 15px 30px;
  border-radius: 14px;
  font-weight: 600;

  & svg {
    transform: scale(1.2);
  }
`;

const Notification = ({
  message,
  open,
  slide,
  onClose,
  vertical = 'bottom',
  horizontal = 'center',
  ...props
}: Props): JSX.Element => {
  if (slide) {
    return (
      <StyledSnackBar
        key={vertical + horizontal}
        {...props}
        open={open}
        onClose={onClose}
        autoHideDuration={3000}
        anchorOrigin={{vertical, horizontal}}>
        <Slide direction={slide} in={open} mountOnEnter unmountOnExit>
          <div>
            <Alert {...props} onClose={onClose}>
              {message}
            </Alert>
          </div>
        </Slide>
      </StyledSnackBar>
    );
  }
  return (
    <StyledSnackBar
      key={vertical + horizontal}
      {...props}
      open={open}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{vertical, horizontal}}>
      <Alert {...props} onClose={onClose}>
        {message}
      </Alert>
    </StyledSnackBar>
  );
};

export const Alert = ({onClose, severity = 'info', ...props}: JurassicAlertProps): JSX.Element => {
  return (
    <StyledAlert onClose={onClose} severity={severity} variant="filled" {...props}>
      {props.children}
    </StyledAlert>
  );
};

export default Notification;
