'use client';
import styled from "styled-components";
import { media } from "@/styles/breakpoints";

export const SectionWrapper = styled.section`

`;

export const Container = styled.div<{
  $reverse: boolean;
  $mobileReverse: boolean;
}>`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  /* mobile first: vertical stack, maybe reversed */
  flex-direction: ${({ $mobileReverse }) =>
    $mobileReverse ? 'column-reverse' : 'column'};

  @media ${media.tablet} {
    /* desktop: horizontal, maybe reversed */
    flex-direction: ${({ $reverse }) =>
    $reverse ? 'row-reverse' : 'row'};
  }
`;

/* unified figure & caption */
export const Figure = styled.figure`
  flex: 1 1 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  gap: 0.5rem;

  /* applies equally to svg (NeonGuys) or <img> */
  img, svg {
    width: 100%;
    max-width: 300px;
    min-width: 250px;
    border-radius: 25px;
    // filter: drop-shadow(0 0 10px #00bfff);
  }
`;

export const FigCaption = styled.figcaption`
  font-size: 0.95rem;
  color: #00bfff;
  text-align: center;
  font-style: italic;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  text-shadow: 0 0 6px rgba(247,183,0,0.6);
`;

export const TextBlock = styled.div`
  flex: 1 1 0;
  min-width: 0;
  width: 100%;
  color: white;
  overflow-wrap: break-word;
  word-break: break-word;
  padding: 0 1rem 0 1rem;

  /* small helper to keep JSX clean */
  & > p {
    line-height: 1.4;
    margin-bottom: 1rem;
  }
`;
