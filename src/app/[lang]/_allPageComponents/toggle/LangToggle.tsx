'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
  border-radius: 30px;
  border: 1px solid #fcb24aff;
  background: #000;
  width: fit-content;
  box-shadow: inset 3px 3px 8px #fe9e17, inset -3px -3px 8px #d07b05ff;
`;

const LangButton = styled.button`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #000;
  border: none;
  border-radius: 25px;
  border: 1px solid #fcb24aff;
  padding: 2px 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: #ff4ecb;
  box-shadow: 2px 2px 4px #fe9e17, -2px -2px 4px #d07b05ff;
`;

const Label = styled.span<{ $hide: boolean }>`
  display: inline-block;
  margin: 0 0 0 0;
  opacity: ${({ $hide }) => ($hide ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const Flag = styled(Image)<{ $shift: boolean; $dir: number }>`
  flex-shrink: 0;
  transition: transform 0.3s ease;
  transform: ${({ $shift, $dir }) =>
    $shift ? `translateX(${ $dir * 100 }%)` : 'translateX(0)'};
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
  const isNorwegian = currentLang === 'no';

// → when we're on `/en`, we'll shift **right** (dir = +1)
// → when we're on `/no`, we'll shift **left**  (dir = –1)
const dir = isNorwegian ? -1 : 1;

  // precompute the "next" values
  const nextLang = isNorwegian ? 'en' : 'no';
  const nextLabel = isNorwegian ? 'EN' : 'NO';
  const nextFlagSrc = isNorwegian
    ? '/images/flags/fliring-scene-english-british-flag-circle.png'
    : '/images/flags/fliring-scene-norwegian-norway-flag-circle.png';
  const nextAltText = isNorwegian ? dict.enAlt : dict.noAlt;

  // UI-only state for animation
  const [hideLabel, setHideLabel] = useState(false);
  const [shiftFlag, setShiftFlag] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Handler kicks off the two-step animation
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (animating) return;
    setAnimating(true);
    setHideLabel(true);    // fade out the old text
    setShiftFlag(true);    // slide the flag left
  };

  // Once the flag has finished sliding, swap and navigate
  const onFlagTransitionEnd = () => {
    if (!shiftFlag) return;
    // navigate to the new locale
    const suffix = rest.length ? `/${rest.join('/')}` : '';
    router.push(`/${nextLang}${suffix}`);
    // NOTE: as soon as the route changes, usePathname() updates and
    // this component re-renders with the new label+flag in swapped order.
  };

  // Render: when !isNorwegian (i.e. on the /en page) we want flag then label,
  // otherwise label then flag.
  return (
    <ToggleContainer role="group" aria-label={dict.toggleLabel}>
      <LangButton onClick={handleClick}>
        {isNorwegian ? (
          <>
            <Label $hide={hideLabel}>{nextLabel}</Label>
            <Flag
              src={nextFlagSrc}
              alt={nextAltText}
              width={35}
              height={25}
              $shift={shiftFlag}
              $dir={dir}
              onTransitionEnd={onFlagTransitionEnd}
            />
          </>
        ) : (
          <>
            <Flag
              src={nextFlagSrc}
              alt={nextAltText}
              width={35}
              height={25}
              $shift={shiftFlag}
              $dir={dir}
              onTransitionEnd={onFlagTransitionEnd}
            />
            <Label $hide={hideLabel}>{nextLabel}</Label>
          </>
        )}
      </LangButton>
    </ToggleContainer>
  );
}
