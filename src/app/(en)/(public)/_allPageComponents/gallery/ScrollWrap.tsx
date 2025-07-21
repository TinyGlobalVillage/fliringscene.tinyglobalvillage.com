import styled from 'styled-components';

const ScrollWrap = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export default ScrollWrap;
