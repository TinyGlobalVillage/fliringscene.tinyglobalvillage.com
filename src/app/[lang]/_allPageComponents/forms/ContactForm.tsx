'use client';
import { useState, useEffect } from 'react';
import NeonContactPageTitle from '../headers/NeonContactPageTitle';
import { FormWrapper, Form, Field, Button, Status } from './ContactFormWrapper';

//import Dictionary
import type { Dictionary } from '@/data/i18n/types';

//create Props to pass params
type ContactFormProps = {
  dict: Dictionary['contact']['contentAboveFold']['form'];
}

export default function ContactForm({ dict }: ContactFormProps) {
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

  // helper: clear any custom message on input
  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    e.currentTarget.setCustomValidity('');
    setForm(f => ({ ...f, [name]: value }));
  };

  // factory to produce onInvalid for each field
  const handleInvalid =
    (field: keyof typeof dict.errors) =>
      (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        e.currentTarget.setCustomValidity(dict.errors[field]);
      };

  return (
    <FormWrapper>
      <h1>
        <NeonContactPageTitle>{dict.title}</NeonContactPageTitle>
      </h1>

      <Form onSubmit={handleSubmit}>
        <Field>
          <label htmlFor="name">{dict.fields.name} *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onInput={handleInput}
            onInvalid={handleInvalid('name')}
            required
          />
        </Field>

        <Field>
          <label htmlFor="email">{dict.fields.email} *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onInput={handleInput}
            onInvalid={handleInvalid('email')}
            required
          />
        </Field>

        <Field>
          <label htmlFor="number">{dict.fields.phone}</label>
          <input id="number" name="number" type="tel" value={form.number} onChange={handleChange} />
        </Field>

        <Field>
          <label htmlFor="topic">{dict.fields.topic} *</label>
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onInput={handleInput}
            onInvalid={handleInvalid('topic')}
            required
          >
            <option value="" disabled>{dict.fields.dropdown.placeholder}</option>
            <option>{dict.fields.dropdown.option1}</option>
            <option>{dict.fields.dropdown.option2}</option>
            <option>{dict.fields.dropdown.option3}</option>
            <option>{dict.fields.dropdown.option4}</option>
            <option>{dict.fields.dropdown.option5}</option>
            <option>{dict.fields.dropdown.option6}</option>
            <option>{dict.fields.dropdown.variableOption}</option>
          </select>
        </Field>

        {form.topic === dict.fields.dropdown.variableOption && (
          <Field>
            <label htmlFor="otherMessage">
              {dict.fields.videoPrompt} *
            </label>
            <textarea
              id="otherMessage"
              name="otherMessage"
              value={form.otherMessage}
              onInput={handleInput}
              onInvalid={handleInvalid('otherMessage')}
              required
            />
          </Field>
        )}

        <Field>
          <label htmlFor="videoLink">{dict.fields.videoPrompt}</label>
          <input
            id="videoLink"
            name="videoLink"
            type="text"
            placeholder="https://youtube.com/… "
            value={form.videoLink}
            onChange={handleChange}
          />
        </Field>

        <input type="text" name="website" autoComplete="off" style={{ display: 'none' }} value={form.website} onChange={handleChange} />
        <input type="hidden" name="ts" value={form.ts} />

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : dict.button}
        </Button>
      </Form>

      {status === 'success' && (
        <Status variant="success" role="status" aria-live="polite">{dict.statusMessage.success}</Status>
      )}
      {status === 'error' && (
        <Status variant="error" role="status" aria-live="polite">{dict.statusMessage.error}</Status>
      )}
    </FormWrapper>
  );
}
