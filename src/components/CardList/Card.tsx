import React, {SVGProps} from 'react';
import {Icon} from '../../@UI';
import {StyledCard} from './styles';

export interface ICard {
  id?: number;
  type: string;
  icon: SVGProps<SVGSVGElement>;
  color?: string;
  size: number;
}

export const Card = ({type, icon, color, size}: ICard): JSX.Element => {
  return (
    <StyledCard>
      <Icon svg={icon} width={size} color={color} />
    </StyledCard>
  );
};
