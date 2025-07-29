'use client'

import styled from 'styled-components';
const SvgWrapper = styled.div<{$width: string}>`
// border: 2px solid red;

width: ${({ $width }) => $width};
height: auto;
display: flex;
justify-content: center;
align-items: center;


svg {
width: 100%;
height: auto;
display: block
}


`;

export default SvgWrapper;
