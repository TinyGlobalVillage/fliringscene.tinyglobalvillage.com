'use client';

import type { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

type CardProps = {
  title:       string;
  description?: string;
  name?:        string;
  shadow?:      'pink' | 'blue' | 'green' | 'gold';
  className?:   string;
  onClick?:     MouseEventHandler<HTMLDivElement>;
  children?:    ReactNode;
};

const CardWrapper = styled.div<{
  shadow: 'pink' | 'blue' | 'green' | 'gold';
}>`
  position: relative;
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  padding: 2rem;
  border-radius: 15px;
  box-sizing: border-box;
  scroll-snap-align: start;
  background: #000;
  color: #fff;
  );
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${({ shadow }) =>
    shadow === 'pink'
      ? '0 4px 8px rgba(255,211,194,0.3), 0 6px 15px rgba(0,0,0,0.19)'
      : '0 4px 8px rgba(0,243,255,0.3), 0 6px 15px rgba(0,0,0,0.19)'};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ shadow }) =>
      shadow === 'pink'
        ? '0 6px 15px rgba(255,215,0,0.6), 0 10px 25px rgba(0, 0, 0, 0.3)'
        : '0 6px 15px rgba(47,199,0,0.5), 0 10px 25px rgba(0, 0, 0, 0.3)'};
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

const Description = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export default function Card({
  title,
  description,
  name,
  shadow = 'blue',
  className = '',
  onClick,
  children,
}: CardProps) {
  return (
    <CardWrapper
      shadow={shadow}
      className={className}
      onClick={onClick}
    >
      <Title>{title}</Title>
      {name && <Name>{name}</Name>}
      {description && <Description>{description}</Description>}
      {children}
    </CardWrapper>
  );
}
