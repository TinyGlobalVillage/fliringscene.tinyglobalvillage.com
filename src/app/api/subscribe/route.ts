import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { email: raw } = await req.json();
  const email = String(raw ?? '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });

  const dc = process.env.MC_SERVER_PREFIX!;
  const listId = process.env.MC_AUDIENCE_ID!;
  const apiKey = process.env.MC_API_KEY!;
  const auth = Buffer.from(`anystring:${apiKey}`).toString('base64');
  const hash = crypto.createHash('md5').update(email).digest('hex');

  const body = { email_address: email, status_if_new: 'pending' }; // use 'subscribed' to auto-subscribe
  const r = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members/${hash}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Basic ${auth}` },
    body: JSON.stringify(body),
    cache: 'no-store',
  });

  if (r.ok) return NextResponse.json({ success: true });
  const err = await r.json().catch(() => ({}));
  const title = (err as any)?.title;
  const detail = (err as any)?.detail;
  const already = title === 'Member Exists';
  return NextResponse.json({ error: already ? 'Already subscribed' : detail || 'Mailchimp error' },
    { status: already ? 409 : r.status || 500 });
}
