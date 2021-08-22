import {Dialog, DialogProps} from '@material-ui/core';
import {ComponentType} from 'react';
import styled from 'styled-components';
import {Colors} from '../GlobalStyle';
import {rgba} from 'polished';

export const StyledDialog = styled(Dialog)<ComponentType<DialogProps>>`
  & .MuiDialog-root {
    position: relative;
  }

  & .MuiDialog-paper {
    position: fixed;
    display: flex;
    width: 4500px;
    height: 320px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: ${rgba(Colors.background, 0.9)};
    border-radius: 14px;
    box-shadow: 0px 10px 32px rgba(0, 0, 0, 0.3);
    color: ${Colors.cautionColor};
    z-index: 9999999;

    @media screen and (max-width: 720px) {
      width: calc(100% - 50px);
    }
  }
`;
