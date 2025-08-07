'use client';
import styled from "styled-components";
import { media } from "@/styles/breakpoints";


export const TextBlock = styled.div`
  flex: 1 1 0;
  min-width: 0;
  width: 100%;
  max-width: 900px;
  color: white;
  overflow-wrap: break-word;
  word-break: break-word;


  /* small helper to keep JSX clean */
  & > p {
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  @media ${media.tablet}{

  max-width: 700px;
  }
`;
