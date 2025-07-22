// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ① Create a transport that calls your local sendmail
const transporter = nodemailer.createTransport({
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',  // on Ubuntu this is the usual path
});

export async function POST(request: Request) {
  const { name, email, number, topic, videoLink } = await request.json();

  if (!name || !email || !topic) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${number ? `<p><strong>Phone:</strong> ${number}</p>` : ''}
    <p><strong>Topic:</strong> ${topic}</p>
    ${videoLink
       ? `<p><strong>Video:</strong> <a href="${videoLink}">${videoLink}</a></p>`
       : ''}
  `;

  try {
    await transporter.sendMail({
      // ② “From” can be any valid address on your server’s domain
      from: `"Fliring Scene" <admin@tinyglobalvillage.com>`,
      // to: 'hei@fliring.no',         // your destination
      to: 'admin@tinyglobalvillage.com',         // your destination
      replyTo: email,               // lets you hit “Reply” to contact the user
      subject: `Contact Form: ${topic}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Mail error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
