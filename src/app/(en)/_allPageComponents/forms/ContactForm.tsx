'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NeonContactPageTitle from '../headers/NeonContactPageTitle';
import { media } from '@/styles/breakpoints';
import { glowPulse } from '../animations/glowPulse';


const FormWrapper = styled.section`
display: flex;
flex-direction: column;
margin-top: -10px;

gap: .5rem;
padding: 1rem 1rem;

border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.7);

@media ${media.mobileM}{
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1rem;
`;

const Field = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

label {
font-size: 1rem;
margin-bottom: -10px;
font-weight: bold;
color: #ff4ecb;
text-align: left;
}

input,
select,
textarea {
width: 100%;
box-sizing: border-box;
height: auto;
padding: 0.5rem 0.75rem;
font-size: .95rem;
line-height: .75;
border-radius: 6px;
border: 1px solid #ccc;
background: #fff;
}

textarea {
resize: vertical;
height: auto;
min-height: 6rem;
}
`;

const Button = styled.button`
align-self: center;
padding: 0.75rem 1.5rem;
background: #ff4ecb;
color: #fff;
border: none;
border-radius: 4px;
font-size: 1rem;
cursor: pointer;
// margin-top: 15px;
margin-bottom: 7px;

&:disabled {
opacity: 0.6;
cursor: default;
}

@media ${media.mobileM}{
margin-bottom: 15px;
}
`;

const Status = styled.p<{ variant: 'success' | 'error' }>`
margin-top: 1rem;
text-align: center;
font-size: 1rem;
color: ${({ variant }) =>
    variant === 'success' ? '#4caf50' : '#f44336'};
`;

// ── Component ────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    topic: '',
    otherMessage: '',
    videoLink: '',
    website: '',   // honeypot
    ts: '',        // timestamp
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // on mount, record the timestamp
  useEffect(() => {
    setForm(f => ({ ...f, ts: String(Date.now()) }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.topic ||
      (form.topic === 'Other' && !form.otherMessage)
    ) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // read the JSON even on errors:
      const payload = await res.json();

      if (!res.ok) {
        console.error('API error:', res.status, payload);
        setStatus('error');
        return;
      }

      // success
      setStatus('success');
      setForm({
        name: '',
        email: '',
        number: '',
        topic: '',
        otherMessage: '',
        videoLink: '',
        website: '',
        ts: String(Date.now()),
      });
    } catch (err) {
      console.error('Network or unexpected error:', err);
      setStatus('error');
    }
  };

  return (
    <FormWrapper>

      <NeonContactPageTitle>Contact Us</NeonContactPageTitle>


      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Field>
          <label htmlFor="name">Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Field>

        {/* Email */}
        <Field>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Field>

        {/* Phone */}
        <Field>
          <label htmlFor="number">Phone Number</label>
          <input
            id="number"
            name="number"
            type="tel"
            value={form.number}
            onChange={handleChange}
          />
        </Field>

        {/* Topic */}
        <Field>
          <label htmlFor="topic">Topic *</label>
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>— select one —</option>
            <option>Rent a comedian</option>
            <option>Rent the venue</option>
            <option>Arrange something on Fliring</option>
            <option>Sponsor</option>
            <option>Become a part of us</option>
            <option>Other</option>
          </select>
        </Field>

        {/* Other message */}
        {form.topic === 'Other' && (
          <Field>
            <label htmlFor="otherMessage">Please describe *</label>
            <textarea
              id="otherMessage"
              name="otherMessage"
              aria-describedby="other-desc"
              rows={4}
              value={form.otherMessage}
              onChange={handleChange}
              required
            />
          </Field>
        )}

        {/* Video link */}
        <Field>
          <label htmlFor="videoLink">Send Us A Performance Video</label>
          <input
            id="videoLink"
            name="videoLink"
            type="text"
            placeholder="https://youtube.com/… "
            value={form.videoLink}
            onChange={handleChange}
          />
        </Field>

        {/* Honeypot (invisible to real users) */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          style={{ display: 'none' }}
          value={form.website}
          onChange={handleChange}
        />

        {/* Timestamp */}
        <input
          type="hidden"
          name="ts"
          value={form.ts}
        />

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </Button>
      </Form>

      {status === 'success' && (
        <Status variant="success" role="status" aria-live="polite">Thank you! We’ll be in touch.</Status>
      )}
      {status === 'error' && (
        <Status variant="error" role="status" aria-live="polite">Something went wrong. Please try again.</Status>
      )}
    </FormWrapper>
  );
}
