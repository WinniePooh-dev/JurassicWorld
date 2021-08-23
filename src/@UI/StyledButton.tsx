import {lighten} from 'polished';
import React, {HTMLAttributes} from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';
import {Colors} from '../GlobalStyle';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  type?: 'button' | 'submit';
  width?: string;
  background?: string;
  color?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  width: ${props => props.width};
  padding: 10px 15px;
  margin: 0 auto;
  background: ${({background}) => background || Colors.mainColor};
  border-radius: 14px;
  color: ${props => props.color || Colors.background};
  font-family: Roboto, Oxygen, Ubuntu, cursive;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: none;
  transition: 0.1s;
  cursor: pointer;

  &:disabled {
    background: ${p => lighten(0.3, p.background || Colors.mainColor)};
  }

  &:active {
    opacity: 0.85;
    transform: translateY(-1px) scale(0.99);
    transition: 0.1s;
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const JurassicButton = ({
  children,
  type = 'button',
  disabled,
  ...styles
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton type={type} disabled={disabled} {...styles}>
      {children}
    </StyledButton>
  );
};

export default JurassicButton;
