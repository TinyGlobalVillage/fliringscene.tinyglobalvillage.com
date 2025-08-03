// src/_allPageComponents/cards/EventCard.tsx
import styled from 'styled-components';
import React from 'react';

const CardWrapper = styled.div<{ $borderColor?: string }>`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  // border: 4px solid ${({ $borderColor }) => $borderColor ?? '#ff4ecb'};
  border-radius: 16px;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.1);
`;

interface EventCardProps {
  $borderColor?: string;
  children: React.ReactNode;
}

export default function EventCard({ $borderColor, children }: EventCardProps) {
  return <CardWrapper $borderColor={$borderColor}>{children}</CardWrapper>;
}
