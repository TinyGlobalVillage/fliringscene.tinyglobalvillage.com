'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  border-radius: 20px;
  background: #f0f0f0;
  width: 64px;
  box-shadow: inset 2px 2px 6px #d9d9d9, inset -2px -2px 6px #ffffff;
`;

const LangButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ active }) => (active ? '#ffffff' : 'transparent')};
  border: none;
  border-radius: 20px;
  padding: 6px 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  color: #333;
  box-shadow: ${({ active }) =>
    active ? '2px 2px 4px #d0d0d0, -2px -2px 4px #ffffff' : 'none'};

  &:hover {
    background: #ffffff;
  }

  img {
    margin-left: 6px;
  }
`;

export default function LangToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const [, currentLang, ...rest] = pathname.split('/');
 const next = (lang: string) => {
  const path = rest.length ? `/${rest.join('/')}` : '';
  router.push(`/${lang}${path}`);
};

  return (
    <ToggleContainer>
      <LangButton active={currentLang === 'no'} onClick={() => next('no')}>
        NO
        <Image src="/flags/no.svg" alt="NO" width={16} height={16} />
      </LangButton>
      <LangButton active={currentLang === 'en'} onClick={() => next('en')}>
        EN
        <Image src="/flags/en.svg" alt="EN" width={16} height={16} />
      </LangButton>
    </ToggleContainer>
  );
}
