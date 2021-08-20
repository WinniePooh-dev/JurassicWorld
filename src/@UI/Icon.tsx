import React, {SVGProps} from 'react';
import {HTMLAttributes} from 'react';
import styled, {css} from 'styled-components';
import {Colors} from '../GlobalStyle';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  svg: SVGProps<SVGSVGElement>;
  color?: string;
  width?: number;
}

const Span = styled.span<{
  width?: number;
  color?: string;
}>`
  ${p =>
    p.width &&
    css`
      width: ${p.width}px;
    `};
  color: ${p => p.color || Colors.mainColor};
`;

export const Icon = (props: Props): JSX.Element => {
  const {svg, ...rest} = props;
  const encoded = (svg as string).replace('data:image/svg+xml;base64,', '');
  const icon = atob(encoded);
  return <Span {...rest} dangerouslySetInnerHTML={{__html: icon}} />;
};
