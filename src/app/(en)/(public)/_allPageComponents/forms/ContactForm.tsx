'use client';
import { useState } from 'react';
import styled from 'styled-components';
import NeonContactPageTitle from '../../contact/_pageComponents/NeonContactPageTitle';
import { media } from '@/styles/breakpoints';

// ── Styled Components ─────────────────────────────────────────────────────────
const FormWrapper = styled.section`
  max-width: 95%;
  padding: 2.5rem;
  background: rgba(0,0,0,0.1);
  border: 8px solid #f7b700;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin: 0 auto;

  @media ${media.mobile}{
    gap: .5rem;
    padding: 1rem;
  }
`;

const ContactFormHeader = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.125rem;
    font-weight: 600;
    color: #ff4ecb;
    text-align: left;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: .75rem;
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

  &:disabled {
    opacity: 0.6;
    cursor: default;
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
  });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // require otherMessage if topic==="Other"
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
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Network error');

      setStatus('success');
      setForm({
        name: '',
        email: '',
        number: '',
        topic: '',
        otherMessage: '',
        videoLink: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <FormWrapper>
      <ContactFormHeader>
        <NeonContactPageTitle>Contact Us</NeonContactPageTitle>
      </ContactFormHeader>

      <Form onSubmit={handleSubmit}>
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

        {form.topic === 'Other' && (
          <Field>
            <label htmlFor="otherMessage">Please describe *</label>
            <textarea
              id="otherMessage"
              name="otherMessage"
              rows={4}
              value={form.otherMessage}
              onChange={handleChange}
              required
              placeholder=""
            />
          </Field>
        )}

        <Field>
          <label htmlFor="videoLink">Send Us A Performance Video</label>
          <input
            id="videoLink"
            name="videoLink"
            type="url"
            placeholder="https://youtube.com/… or similar"
            value={form.videoLink}
            onChange={handleChange}
          />
        </Field>

        <Button type="submit" disabled={status==='sending'}>
          {status==='sending' ? 'Sending…' : 'Send Message'}
        </Button>
      </Form>

      {status==='success' && <Status variant="success">Thank you! We’ll be in touch.</Status>}
      {status==='error'   && <Status variant="error">Something went wrong. Please try again.</Status>}
    </FormWrapper>
  );
}
