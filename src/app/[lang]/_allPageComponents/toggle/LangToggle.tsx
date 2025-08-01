'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  padding: 6px; /* Adjust padding to make the pill look unified */
  border-radius: 30px; /* More rounded for the pill effect */
  background: #ffffff; /* A slightly lighter background for neumorphism */
  width: fit-content; /* Adjust width based on content */
  box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff; /* Inset shadow for the "pressed" container effect */
`;


const LangButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d4d2d2; /* This will be the "pressed" background */
  border: none;
  border-radius: 25px;
  padding: 2px 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: #333;
  box-shadow: 2px 2px 4px #b0b0b0, -2px -2px 4px #f0f0f0; /* Outer shadow for the "pressed" button */
  transition: all 0.3s ease;

  &:hover {
    background: #c7c7c7; /* Slightly darker on hover */
  }

  img {
    margin-left: 8px;
    border-radius: 50%;
  }
`;

type LangToggleProps = {
  dict: {
    toggleLabel: string;
    enAlt: string;
    noAlt: string;
  };
};

export default function LangToggle({ dict }: LangToggleProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [, currentLang, ...rest] = pathname.split('/');

  // Determine the target language and its details
  const isNorwegian = currentLang === 'no';
  const targetLang = isNorwegian ? 'en' : 'no';
  const targetLabel = isNorwegian ? 'EN' : 'NO';
  const targetAltText = isNorwegian ? dict.enAlt : dict.noAlt;
  const targetFlagSrc = isNorwegian
    ? '/images/flags/fliring-scene-english-british-flag-circle.jpeg'
    : '/images/flags/fliring-scene-norwegian-norway-flag-circle.jpeg';

  const handleClick = () => {
    const path = rest.length ? `/${rest.join('/')}` : '';
    router.push(`/${targetLang}${path}`);
  };

  return (
    <ToggleContainer role="group" aria-label={dict.toggleLabel}>
      <LangButton onClick={handleClick}>
        {targetLabel}
        <Image
          src={targetFlagSrc}
          alt={targetAltText}
          width={25}
          height={20}
        />
      </LangButton>
    </ToggleContainer>
  );
}
