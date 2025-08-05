'use client';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const FooterSection = styled.section`
scroll-margin-top: 100px; // adjust based on fixed nav height
width: 90%;
margin: 0 auto;
padding: 1rem;
padding-top: 2rem;

display: flex;
flex-direction: column;
align-items: center;

color: #ff4ecb;
border-radius: 25px;
background: rgba(0, 0, 0, 0.9);

p {
font-size: .9rem;
text-align: center;

@media ${media.tablet}{
font-size: 1rem;
margin-bottom: 5px;
}

}

@media ${media.tablet}{
padding: 2rem;
}
  svg {
    height: 2em;
    width: 2em;
  }
`;

export const Trademark = styled.div`
margin-top: 10px;
font-size: 0.75rem;
text-align: center;
color: #00bfff;

a {
color: inherit;
text-decoration: underline;

&:hover {
text-decoration: none;
color: #fff;
}
}

@media ${media.mobileM} {
text-align: center;
font-size: .875rem;
max-width: 200px;
}
@media ${media.tablet} {
max-width: 500px;
text-align: left;
font-size: 1rem;
}
`;


export const FooterGrid = styled.div`
/* ─── Base: mobile first ─── */
display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
margin-bottom: 50px;

& > :nth-child(1) { /* Newsletter */ order: 1; }
& > :nth-child(2) { /* Links      */ order: 3; }
& > :nth-child(3) { /* Contact    */ order: 2; }

@media ${media.tablet} {
display: grid;
align-items: start;
margin-top: 10px;

grid-template-columns: repeat(3, minmax(0, 1fr));
gap: 2rem;

& > :nth-child(1) { /* Newsletter */ order: 1; }
& > :nth-child(2) { /* Links      */ order: 2; }
& > :nth-child(3) { /* Contact    */ order: 3; }
}

@media ${media.laptop}{

}
@media ${media.laptopL}{
width: 80%;
}

@media ${media.fourK}{
width: 50%;
}
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
color: #fff;

@media ${media.mobileM}{
gap: .5rem;
}
@media ${media.tablet}{
gap: 1.5rem;
}
@media ${media.laptop}{
gap: 2.5rem;
}
@media ${media.fourK}{
font-size: 2rem;
}

h3 {
@media ${media.tablet}{
font-size: 1.5rem;
}
@media ${media.fourK}{
font-size: 2rem;
}

}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
`;

export const Input = styled.input<{ $inputWidth: string }>`
width: ${({ $inputWidth }) => $inputWidth};
height: 32px;
padding: 0 0.75rem;
border-radius: 4px;
border: 1px solid #ccc;
font-size: 1rem;
box-sizing: border-box;

@media ${media.tablet}{
height: 40px;
font-size: 1rem;
border-radius: 5px;
}
@media ${media.laptop}{
font-size: 1.25rem;
border-radius: 5px;
}
`;

export const Button = styled.button<{ $buttonWidth: string }>`
padding: 0.5rem;
height: 32px;
width: ${({ $buttonWidth }) => $buttonWidth};
background: #cc00aa;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
filter: drop-shadow(0 0 5px #00bfff);
background: #00bfff;
color: #fff;
}

@media ${media.tablet}{
height: 40px;
font-size: 1.25rem;
border-radius: 5px;
}
@media ${media.laptop}{
font-size: 1.5rem;
border-radius: 5px;
}
`;

export const List = styled.ul`
font-weight: bold;
font-size: 1.25rem;
list-style: none;
margin: 0;
margin-top: 5px;
margin-bottom: 5px;
padding: 0;
display: flex;
flex-direction: column;
gap: 1rem;
text-align: center;

a {
color: #ff4ecb;
text-decoration: none;
transition: color 0.2s;

    &:hover {
    color: #00bfff;
    }
}

@media ${media.laptop}{
font-size: 1.5rem;
}
@media ${media.fourK}{
font-size: 2rem;
}
`;

export const StatusMessage = styled.p<{ variant: 'success' | 'error' }>`
margin-top: 1rem;
font-size: 09.rem;
text-align: center;

color: ${({ variant }) => variant === 'success' ? '#ff4ecb' : '#f44336'}

@media ${media.tablet}{
font-size: 1.5rem;
}
`;

export const SignupHeader = styled.div<{ $fontSize: string }>`
margin-bottom: 15px;
text-align: center;
font-size: ${({ $fontSize }) => $fontSize};

@media ${media.mobileM}{
margin-bottom: 10px;
}
@media ${media.laptop}{
margin-bottom: 2.5rem;
}

`;

export const IconLink = styled.a`
font-size: 1.5rem;
display: inline-flex;
align-items: center;
`;
