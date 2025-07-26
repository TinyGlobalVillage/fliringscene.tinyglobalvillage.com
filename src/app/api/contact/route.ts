// app/api/contact/route.ts
export const runtime = 'nodejs';

import { NextResponse, NextRequest } from 'next/server';
import { RateLimiterMemory }        from 'rate-limiter-flexible';
import sanitize                     from 'sanitize-html';
import nodemailer                   from 'nodemailer';

const limiter = new RateLimiterMemory({ points: 5, duration: 60 });

export async function POST(request: NextRequest) {
  // 1) rate-limit by IP
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

  // 3) pull out only what we need
  const {
    name,
    email,
    topic,
    otherMessage,
    videoLink,
    website,  // honeypot field
    ts        // timestamp field
  } = await request.json();

  // 4) honeypot: must be empty
  if (website) {
    return NextResponse.json({ error: 'Spam detected' }, { status: 400 });
  }

  // 5) timing: require at least 3 seconds to submit
  const sentAt = Number(ts);
  if (isNaN(sentAt) || Date.now() - sentAt < 3000) {
    return NextResponse.json({ error: 'Form submitted too quickly' }, { status: 400 });
  }

  // 6) sanitize inputs
  const clean = (s: string) =>
    sanitize(s ?? '', { allowedTags: [], allowedAttributes: {} });

  const cleanName  = clean(name);
  const cleanEmail = clean(email);
  const cleanTopic = clean(topic);
  const cleanMsg   = otherMessage ? clean(otherMessage) : '';
  const cleanVid   = videoLink    ? clean(videoLink)    : '';

  // 7) build your email HTML
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${cleanName}</p>
    <p><strong>Email:</strong> ${cleanEmail}</p>
    <p><strong>Topic:</strong> ${cleanTopic}</p>
    ${cleanMsg ? `<p><strong>Message:</strong> ${cleanMsg}</p>` : ''}
    ${cleanVid ? `<p><strong>Video:</strong> <a href="${cleanVid}">${cleanVid}</a></p>` : ''}
  `;

  // 8) send it
  // const transporter = nodemailer.createTransport({
  //   sendmail: true,
  //   newline:  'unix',
  //   path:     '/usr/sbin/sendmail',
  // });

  const transporter = nodemailer.createTransport({
  host:     process.env.SMTP_HOST,
  port:     Number(process.env.SMTP_PORT),
  secure:   process.env.SMTP_SECURE === 'true',  // TLS on 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  // Use the user's email as the envelope From
  await transporter.sendMail({
    from:    `"${cleanName}" <${cleanEmail}>`,
    to:      'admin@tinyglobalvillage.com',
    replyTo: cleanEmail,
    subject: `Contact Form: ${cleanTopic}`,
    html,
    envelope: {
      from: cleanEmail,
      to:   'admin@tinyglobalvillage.com',
    },
  });

  // 9) respond
  return NextResponse.json({ success: true });
}
