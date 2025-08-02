import styled from "styled-components";
import { media } from "@/styles/breakpoints";
import { glowPulse } from "../animations/glowPulse";


export const FormWrapper = styled.section`
display: flex;
flex-direction: column;
margin-top: -13px;

gap: 1rem;
padding: 1rem 1rem;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.7);

@media ${media.mobileL}{
margin-top: 10px;
}
@media ${media.tablet}{
margin-top: 30px;
gap: 1rem;
padding: 2rem;
}

@media ${media.laptop}{
margin-top: 10px;
}
@media ${media.laptopL}{
margin-top: 50px;
}

@media ${media.fourK}{
margin-top: 100px;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1.25rem;

@media ${media.laptop}{
gap: .75rem;
}
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

@media ${media.mobileM}{
gap: 1.3rem;
  }

label {
font-size: 1rem;
margin-bottom: -10px;
font-weight: bold;
color: #ff4ecb;
text-align: left;

  @media ${media.mobileM}{
  font-size: 1.25rem;
  }
  @media ${media.mobileL}{
  font-size: 1.25rem;
  }
  @media ${media.tablet}{
  margin-top: 5px;
  font-size: 1.5rem;
  margin-bottom: 0;
  }

  @media ${media.laptop}{
  margin-top: 10px;
  font-size: 1.25rem;
}
  @media ${media.fourK}{
  margin-top: 20px;
  font-size: 2rem;
}

}

input,
select,
textarea {
width: 100%;
box-sizing: border-box;
height: auto;
padding: 0.25rem 0.75rem;
font-size: .95rem;
line-height: .75;
border-radius: 6px;
border: 1px solid #ccc;
background: #fff;

@media ${media.mobileL}{
padding: .5rem 1rem;
font-size: 1.25rem;
}
@media ${media.tablet}{
font-size: 1.5rem;
}

@media ${media.laptop}{
font-size: 1.25rem;
}
@media ${media.laptopL}{
font-size: 1.75rem;
}

}

textarea {
resize: vertical;
height: auto;
min-height:6rem;
}

@media ${media.tablet}{
gap: .75rem;
}
@media ${media.laptop}{
gap: 1rem;
}
`;

export const Button = styled.button`
align-self: center;
padding: 0.5rem 1.5rem;
background: #ff4ecb;
color: #fff;
border: none;
border-radius: 4px;
font-size: 1rem;
cursor: pointer;


&:disabled {
opacity: 0.6;
cursor: default;
}

@media ${media.mobileL}{
margin-bottom: 15px;
padding: .75rem 2rem;
font-size: 1rem;
}
@media ${media.tablet}{
margin-bottom: 13px;
margin-top: 20px;
padding: 1rem 2rem;
font-size: 1.25rem;
}
@media ${media.laptop}{
padding: .75rem 2.5rem;
font-size: 1rem;
margin-bottom: 0px;
}
`;

export const Status = styled.p<{ variant: 'success' | 'error' }>`
margin-top: 1rem;
text-align: center;
font-size: 1rem;
color: ${({ variant }) =>
    variant === 'success' ? '#4caf50' : '#f44336'};
`;
