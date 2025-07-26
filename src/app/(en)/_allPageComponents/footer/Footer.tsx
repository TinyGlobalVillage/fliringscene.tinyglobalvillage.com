'use client';
import styled from 'styled-components';

import { useState } from 'react';
import Link from 'next/link';
import { media } from '@/styles/breakpoints';
import { scaleMap } from '@/styles/scaleMap/scaleMap';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import FacebookIcon from '../facebook/FacebookIcon';


const FooterSection = styled.section`
    scroll-margin-top: 100px; // adjust based on fixed nav height
    width: 80%;
    margin: 0 auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: #ff4ecb;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.6);

    @media ${media.mobile}{
    max-height: 80vh;
    padding: 1.5rem;
    }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 50px;

  @media ${media.mobile}, ${media.tablet}{
    display: flex;
    flex-direction: column;

    /* now each child can use order */
    & > :nth-child(1) { order: 1; } /* newsletter in middle */
    & > :nth-child(2) { order: 2; } /* links go last */
    & > :nth-child(3) { order: 1; } /* contact goes first */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media ${media.mobile}{
  gap: .5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input<{ $inputWidth: string }>`
  width: ${({ $inputWidth }) => $inputWidth};
  height: 32px;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button<{ $buttonWidth: string }>`
  padding: 0.5rem;
  height: 32px;
  width: ${({ $buttonWidth }) => $buttonWidth};
  background: #ff4ecb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;



  &:hover {
    filter: drop-shadow(0 0 5px #ff4ecb);
    color: #00bfff;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  a {
    color: #ff4ecb;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #00bfff;
    }
  }
`;

const StatusMessage = styled.p<{ variant: 'success' | 'error' }>`
margin-top: 1rem;
font-size: 09.rem;
text-align: center;

color: ${({ variant }) => variant === 'success' ? '#ff4ecb' : '#f44336'}
`;

const SignupHeader = styled.div<{ $fontSize: string }>`
margin-bottom: 1rem;
text-align: center;
line-height: 1rem;
font-size: ${({ $fontSize }) => $fontSize};
`;

const IconLink = styled.a`
  color: #ff4ecb;             /* default icon color */
  font-size: 1.5rem;          /* controls icon size via SVG's currentColor */
  display: inline-flex;
  align-items: center;

  &:hover {
    color: #00bfff;           /* hover color */
  }


`;

const Trademark = styled.div`
  font-size: 0.875rem;
  color: #00bfff;
  a {
    color: inherit;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default function Footer() {
  const { fontSizeKey } = useResponsiveResize();
  const { footerHeaderFontSize, footerButtonWidth, inputWidth } = scaleMap[fontSizeKey];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'duplicate'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      // const data = await res.json();
      if (!res.ok) {
        if (res.status === 409) {
          setStatus('duplicate');
        } else {
          setStatus('error')
        }
      } else {
        setStatus('success');
        setEmail('');
      }


    } catch {
      setStatus('error');
    }
  };

  return (
    <FooterSection id='footer' role='contentinfo'>
      <FooterGrid>
        {/* 1️⃣ Newsletter */}
        <Column>
          <div>
            <SignupHeader id='newsletter-header' $fontSize={footerHeaderFontSize}>
              <h3>Signup for Our Newsletter</h3>
            </SignupHeader>
            <Form onSubmit={handleSubmit} aria-labelledby="newsletter-header">
              <Input
                aria-label='Email address'
                $inputWidth={inputWidth}
                type="email"
                placeholder="Enter Email In Here"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={status === 'sending'} $buttonWidth={footerButtonWidth}>
                {status === 'sending' ? 'Sending…' : 'Subscribe'}
              </Button>
            </Form>
            {status === 'success' && (<StatusMessage variant='success' aria-live='polite'>Thanks for subscribing!</StatusMessage>)}
            {status === 'error' && (<StatusMessage variant='error' aria-live='polite'>Oops! Try again.</StatusMessage>)}
            {status === 'duplicate' && (<StatusMessage variant='error' aria-live='polite'> You’re already on the list!</StatusMessage>)}
          </div>
        </Column>

        {/* 2️⃣ Quick Links */}
        <Column>
          <h3>Quick Links</h3>
          <List>
            <li><Link href="/shows">Shows</Link></li>
            {/* <li><Link href="/about">About</Link></li> */}
            {/*<li><Link href="/gallery">Gallery</Link></li>*/}
            <li><Link href="/contact">Contact</Link></li>
            {/* <ul> */}
            {/* <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li> */}
            {/* </ul> */}
          </List>
          <IconLink
            href="https://www.facebook.com/profile.php?id=61577337325283"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconLink>

        </Column>

        {/* 3️⃣ Contact block */}
        <Column>
          <h3>Get in Touch</h3>
          <Link href='/contact' passHref>
            <Button $buttonWidth={footerButtonWidth} aria-label='Go to contact page'>Contact Us</Button></Link>
        </Column>
      </FooterGrid>

      {/* <p>Follow us on social media!</p> */}

      <p>© 2025 Fliring Scene. All rights reserved.</p>
      <Trademark>
        Powered by{' '}
        <a
          href="https://tinyglobalvillage.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tiny Global Village LLC™
        </a>
      </Trademark>
    </FooterSection>
  );
}
