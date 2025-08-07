// src/app/[lang]/_allPageComponents/textSections/TextContent.tsx
'use client';
import React from 'react';
import { TextBlock } from './TextContentWrapper';
import type { AboutSectionText } from '@/data/i18n/types';

export interface TextContentProps {
  /**
   * Array of objects containing id and paragraph text.
   * Images and captions should be rendered separately in the page layout.
   */
  textArray: AboutSectionText[];
}

/**
 * Renders a series of text paragraphs using the provided dictionary entries.
 */
export default function TextContent({ textArray }: TextContentProps) {
  return (
        <TextBlock>
          {textArray.map(({ id, text }) => (
            <p key={id}>{text}</p>
          ))}
        </TextBlock>
  );
}
