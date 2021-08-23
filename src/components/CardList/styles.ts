import {HTMLAttributes} from 'react';
import styled, {css, keyframes} from 'styled-components';
import {Colors} from '../../GlobalStyle';
import {SideCard} from './Card';
import {flash, flipInY, tada} from 'react-animations';
import {lighten} from 'polished';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  side: string;
  success?: boolean;
  failure?: boolean;
}

const flashAnimation = keyframes`${flash}`;

const tremorAnimation = keyframes`${tada}`;

const flipAnimation = keyframes`${flipInY}`;

export const StyledCard = styled.div<CardProps>`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 1em;
  width: 300px;
  height: 500px;
  animation: 0.6s ${flipAnimation};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: 0.6s;
  -webkit-perspective: 1000px;
  transform: rotateY(180deg);

  ${p =>
    p.failure &&
    css`
      animation: 1460ms ${tremorAnimation};
    `};

  ${p =>
    p.success &&
    css`
      animation: 1s ${flashAnimation};
    `};

  ${p =>
    p.disabled &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `};

  ${p =>
    p.side === SideCard.Face &&
    css`
      border: 4px double #708090;
      background: ${p.failure ? lighten(0.2, Colors.errorColor) : '#fffacd'};
      transform: rotateY(180deg);
    `};

  ${p =>
    p.side === SideCard.Back &&
    css`
      border: 1px solid #708090;
      background: ${Colors.titleColor};
      transform: rotateY(0deg);
    `};

  @media screen and (min-device-width: 320px) and (max-device-width: 640px), (max-width: 480px) {
    width: 120px;
    height: 200px;
    margin: 0.2em;
  }
`;
