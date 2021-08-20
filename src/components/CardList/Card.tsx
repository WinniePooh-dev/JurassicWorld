import React, {SVGProps} from 'react';
import {Icon} from '../../@UI';

interface ICard {
  id?: number;
  type: string;
  icon: SVGProps<SVGSVGElement>;
  color?: string;
  size: number;
}

export const Card = ({type, icon, color, size}: ICard): JSX.Element => {
  return <Icon svg={icon} width={size} color={color} />;
};
