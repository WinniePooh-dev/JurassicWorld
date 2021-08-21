import React, {SVGProps, useState} from 'react';
import {Icon} from '../../@UI';
import {StyledCard} from './styles';
import jurassicWorld from '../../assets/icons/jurassic-world.svg';

export enum SideCard {
  Back = 'back',
  Face = 'face'
}

export interface ICard {
  id?: number;
  type: string;
  icon: SVGProps<SVGSVGElement>;
  color?: string;
  size: number;
}

export const Card = ({type, icon, color, size}: ICard): JSX.Element => {
  const [side, setSide] = useState<SideCard>(SideCard.Back);

  const onChangeSide = () => {
    setSide(SideCard.Face);
    setTimeout(() => setSide(SideCard.Back), 5000);
  };

  if (side === SideCard.Back) {
    return (
      <StyledCard side={side} onClick={onChangeSide}>
        <Icon svg={jurassicWorld} width={300} />
      </StyledCard>
    );
  }

  return (
    <StyledCard side={side}>
      <Icon svg={icon} width={size} color={color} />
    </StyledCard>
  );
};
