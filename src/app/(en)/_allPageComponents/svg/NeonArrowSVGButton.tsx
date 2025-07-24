'use client'
import styled from 'styled-components';
import CurveArrow from './CurveArrowSVG';
// import StraightArrow from './StraightArrowSVG';

const ButtonWrapper = styled.button`
  all: unset;
  display: block;
  max-width: 500px;
  width: 100%;
  cursor: pointer;
  margin-top: -22px;
  // margin-left: -100px;


  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    /* slightly bigger */
    transform: scale(1.05);

    /* crank the glow */
    filter:
      drop-shadow(0 0 1px #fe9e17)

  }
`;


function NeonArrowSVGButton() {

  return (
    <ButtonWrapper onClick={
      () => {
        const el = document.getElementById('upcoming-show');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    >
      <CurveArrow/>
{/* <StraightArrow/> */}
    </ButtonWrapper>

  );
}

export default NeonArrowSVGButton;
