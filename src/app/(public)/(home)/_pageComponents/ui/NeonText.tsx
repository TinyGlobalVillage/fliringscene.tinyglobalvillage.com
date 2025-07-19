import styled from 'styled-components';

type NeonTextProps = {
  color: string;
  size?: string;
};

const NeonText = styled.h1<NeonTextProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size || '3rem'};
  font-weight: bold;
  text-transform: uppercase;
  text-shadow:
    0 0 5px ${({ color }) => color},
    0 0 10px ${({ color }) => color},
    0 0 20px ${({ color }) => color},
    0 0 40px ${({ color }) => color};
`;

export default NeonText;
