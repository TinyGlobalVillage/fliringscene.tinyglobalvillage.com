// app/api/contact/route.ts
export const runtime = 'nodejs';

import { NextResponse, NextRequest } from 'next/server';
import { RateLimiterMemory }        from 'rate-limiter-flexible';
import sanitize                     from 'sanitize-html';
import nodemailer                   from 'nodemailer';

const limiter = new RateLimiterMemory({ points: 5, duration: 60 });

export async function POST(request: NextRequest) {
  // 1) rate‐limit by IP
  const ip = request.headers.get('x-forwarded-for') ?? '';
  try {
    await limiter.consume(ip);
  } catch {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // 2) origin check (CSRF guard)
  const origin = request.headers.get('origin');
  if (origin !== process.env.NEXT_PUBLIC_BASE_URL) {
    return NextResponse.json({ error: 'Invalid origin' }, { status: 403 });
  }

  // 3) parse and validate payload
  const {
    name,
    email,
    topic,
    otherMessage,
    videoLink,
    website,  // honeypot
    ts        // timestamp
  } = await request.json();

  // honeypot: bots fill this
  if (website) {
    return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
  }

  // timing: require human‐like delay
  const sentAt = Number(ts);
  if (isNaN(sentAt) || Date.now() - sentAt < 3000) {
    return NextResponse.json({ error: 'Form submitted too quickly' }, { status: 400 });
  }

  // sanitize
  const clean = (s: string) =>
    sanitize(s ?? '', { allowedTags: [], allowedAttributes: {} });

  const cleanName  = clean(name);
  const cleanEmail = clean(email);
  const cleanTopic = clean(topic);
  const cleanMsg   = otherMessage ? clean(otherMessage) : '';
  const cleanVid   = videoLink    ? clean(videoLink)    : '';

  // build HTML body
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${cleanName}</p>
    <p><strong>Email:</strong> ${cleanEmail}</p>
    <p><strong>Topic:</strong> ${cleanTopic}</p>
    ${cleanMsg ? `<p><strong>Message:</strong> ${cleanMsg}</p>` : ''}
    ${cleanVid ? `<p><strong>Video:</strong> <a href="${cleanVid}">${cleanVid}</a></p>` : ''}
  `;

  // 4) set up SMTP transport
  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 5) verify transport on startup
  try {
    await transporter.verify();
    console.log('✅ SMTP transport verified:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
    });
  } catch (err) {
    console.error('❌ SMTP verify failed:', err);
    return NextResponse.json({ error: 'Mail configuration error' }, { status: 500 });
  }

  // 6) send the mail
  try {
    const info = await transporter.sendMail({
      from:     `"Fliring Scene Form Submissions" <${process.env.FROM_EMAIL}>`,
      to:       process.env.TO_EMAIL,
      replyTo:  cleanEmail,
      subject:  `Contact Form Submission: "${cleanTopic}"`,
      html,
      envelope: {
        from: process.env.FROM_EMAIL,
        to:   process.env.TO_EMAIL
      },
    });
    console.log('✉️ sendMail success:', info);
  } catch (err) {
    console.error('❌ sendMail failed:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  // 7) respond
  return NextResponse.json({ success: true });
}
