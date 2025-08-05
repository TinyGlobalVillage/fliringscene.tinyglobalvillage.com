'use client';

import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

export const AboveFoldWrapper = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
margin-bottom: 100px;

@media ${media.mobileM} {
margin-top: 90px;
margin-bottom: 200px;
}

@media ${media.mobileL} {
margin-top: 160px;
}

@media ${media.tablet} {
margin-top: 120px;
margin-bottom: 300px;
}

@media ${media.laptop} {
margin-top: 110px;
margin-bottom: 300px;
}
@media ${media.laptopL} {
margin-top: 130px;
margin-bottom: 300px;
}

`;

export const SubtitleWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
gap: 0.5rem;
width: 100%;
max-width: 700px;
padding: 0rem 1rem 0rem 1.5rem;
margin-bottom: -20px;

@media ${media.mobileM}{
margin-top: -15px;
gap: 0;
}
@media ${media.mobileL}{
margin-top: -10px;
margin-bottom: -20px;
}
@media ${media.tablet}{
margin-top: 5px;
margin-bottom: -10px;
gap: 1rem;
}
@media ${media.laptop}{
margin-top: 15px;
margin-bottom: 0px;
margin-right: 50px;
}
@media ${media.laptopL}{
margin-top: 20px;
margin-right: 50px;
}

`;

export const FaceMicWrapper = styled.div`
display: flex;
flex-direction: row;

@media ${media.laptop}{
margin-right: 70px;
}
@media ${media.laptopL}{
margin-right: 70px;
}
`;

export const ComedyClubSignArrowWrapper = styled.div`
display: flex;
flex-direction: column;
@media ${media.laptop}{
margin-top: -20px;
}
@media ${media.laptopL}{

}
`;
