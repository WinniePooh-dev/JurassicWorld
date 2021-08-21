import styled, {css, keyframes} from 'styled-components';
import {Colors} from '../../GlobalStyle';
import {SideCard} from './Card';

export const tremor = keyframes`
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
`;

export const StyledCard = styled.div<{side: string}>`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin: 1em;
  width: 300px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: 0.6s;
  -webkit-perspective: 1000px;
  transform: rotateY(180deg);
  ${p =>
    p.side === SideCard.Face &&
    css`
      border: 4px double #708090;
      background: #fffacd;
      transform: rotateY(180deg);
    `}
  ${p =>
    p.side === SideCard.Back &&
    css`
      border: 1px solid #708090;
      background: ${Colors.titleColor};
      transform: rotateY(0deg);

      &:hover {
        -webkit-animation-name: ${tremor};
        animation-name: ${tremor};
        -webkit-animation-duration: 0.1s;
        animation-duration: 0.1s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
    `}
`;
