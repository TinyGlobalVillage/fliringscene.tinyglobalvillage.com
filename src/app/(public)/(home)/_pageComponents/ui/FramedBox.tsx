import styled from 'styled-components';
import { flicker } from '@/components/animations/flicker';

const FramedBox = styled.div`
  width: 300px;
  height: 200px;
  border: 5px solid #f7b700;
  padding: 1rem 2rem;
  display: inline-block;
  border-radius: 20px;
  animation: ${flicker} 3s infinite;
`;

export default FramedBox;
