import React, { useState, useEffect } from 'react';
import NeonContactPageTitle from '../headers/NeonContactPageTitle';
import { FormWrapper, Form, Field, Button, Status } from './ContactFormWrapper';

// import Dictionary type
import type { Dictionary } from '@/data/i18n/types';

// Props for the form component
type ContactFormProps = {
  dict: Dictionary['contact']['contentAboveFold']['form'];
};

export default function ContactForm({ dict }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    topic: '',
    otherMessage: '',
    videoLink: '',
    website: '', // honeypot
    ts: '',      // timestamp
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Record timestamp on mount
  useEffect(() => {
    setForm(f => ({ ...f, ts: String(Date.now()) }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.currentTarget.setCustomValidity('');
    const { name, value } = e.currentTarget;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: require name, email, topic, and if "Other" then otherMessage
    if (
      !form.name ||
      !form.email ||
      !form.topic ||
      (form.topic === dict.fields.dropdown.variableOption && !form.otherMessage)
    ) {
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const payload = await res.json();

      if (!res.ok) {
        console.error('API error:', res.status, payload);
        setStatus('error');
        return;
      }

      // on success, reset form
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

  // on invalid, show custom message from dict.errors
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
        {/* Name */}
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

        {/* Email */}
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

        {/* Phone */}
        <Field>
          <label htmlFor="number">{dict.fields.phone}</label>
          <input
            id="number"
            name="number"
            type="tel"
            value={form.number}
            onChange={handleChange}
          />
        </Field>

        {/* Topic dropdown */}
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
            <option value="" disabled>
              {dict.fields.dropdown.placeholder}
            </option>
            <option>{dict.fields.dropdown.option1}</option>
            <option>{dict.fields.dropdown.option2}</option>
            <option>{dict.fields.dropdown.option3}</option>
            <option>{dict.fields.dropdown.option4}</option>
            <option>{dict.fields.dropdown.option5}</option>
            <option>{dict.fields.dropdown.option6}</option>
            <option>{dict.fields.dropdown.variableOption}</option>
          </select>
        </Field>

        {/* Other message when "Other" chosen */}
        {form.topic === dict.fields.dropdown.variableOption && (
          <Field>
            <label htmlFor="otherMessage">
              {dict.fields.otherMessage} *
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

        {/* Video prompt */}
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

        {/* honeypot and timestamp */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          style={{ display: 'none' }}
          value={form.website}
          onChange={handleChange}
        />
        <input type="hidden" name="ts" value={form.ts} />

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : dict.button}
        </Button>
      </Form>

      {status === 'success' && (
        <Status variant="success" role="status" aria-live="polite">
          {dict.statusMessage.success}
        </Status>
      )}

      {status === 'error' && (
        <Status variant="error" role="status" aria-live="polite">
          {dict.statusMessage.error}
        </Status>
      )}
    </FormWrapper>
  );
}
