'use client'
import styled from 'styled-components';
// import CurveArrow from '../svg/CurveArrowSVG';
import StraightArrow from '../svg/StraightArrowSVG';

const ButtonWrapper = styled.button`
all: unset;
display: block;
max-width: 500px;
width: 100%;
height: 150px;
cursor: pointer;

transition: transform 0.2s ease, filter 0.2s ease;

&:hover {
/* slightly bigger */
 transform: translateX(40px); 
  transition: transform 0.3s ease;

/* crank the glow */
filter:
drop-shadow(0 0 1px #fe9e17)

}
`;


function ContactArrowButton() {

  return (
    <ButtonWrapper
      aria-label="Go to contact page"
      onClick={
        () => {
          const el = document.getElementById('Get in touch');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    >
      <StraightArrow/>
      {/*<CurvedArrow />  */}
    </ButtonWrapper>

  );
}

export default ContactArrowButton;
