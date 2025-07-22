'use client';
import styled from 'styled-components';

import { useState } from 'react';
import Link from 'next/link';

import { media } from '@/styles/breakpoints';
import { addSubscriber } from '@/data/subscribers';


const FooterSection = styled.section`
  //  min-height: 70vh;
    scroll-margin-top: 100px; // adjust based on fixed nav height
    width: 80%;
    min-width: 300px;
    margin: 0 auto;
    margin-bottom: 35px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ff4ecb;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.6);

    @media ${media.mobile}{
  width: 90%;
  min-height: 60vh;
  padding: 1.5rem;

  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.5rem;
  background: #ff4ecb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 5px #ff4ecb);
  }
`;


const Trademark = styled.div`
  margin-top: 0.75rem;
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
   const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

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
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <FooterSection>
      <FooterGrid>
        {/* 1️⃣ Newsletter */}
        <Column>
          <div>
        <h3>Signup for Our Newsletter</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter Email In Here"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={status==='sending'}>
            {status==='sending' ? 'Sending…' : 'Subscribe'}
          </Button>
        </Form>
        {status==='success' && <p>Thanks for subscribing!</p>}
        {status==='error'   && <p>Oops, try again.</p>}
      </div>
        </Column>

        {/* 2️⃣ Quick Links */}
        <Column>
          <h3>Quick Links</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <ul>
              <li><Link href="/shows">Shows</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </Column>

        {/* 3️⃣ Contact block */}
        {/* <Column>
          <h3>Get in Touch</h3>
          <Link href="/contact">Contact Form</Link>
        </Column> */}
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
