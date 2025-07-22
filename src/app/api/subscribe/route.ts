// app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { email: rawEmail } = await request.json();
  const email = rawEmail?.trim().toLowerCase();

  // 1️⃣ validate
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required' },
      { status: 400 }
    );
  }

  // 2️⃣ locate file
  const filePath = path.join(process.cwd(), 'src', 'data', 'subscribers.json');

  // 3️⃣ read or init
  let list: string[] = [];
  try {
    const text = await fs.readFile(filePath, 'utf-8');
    list = JSON.parse(text);
  } catch (err: unknown) {
    // Narrow to the ErrnoException interface that has .code
    const e = err as { code?: string };
    if (e.code === 'ENOENT') {
      // file not found → initialize
      await fs.writeFile(filePath, '[]', 'utf-8');
    } else {
      console.error('Corrupt JSON, resetting…', err);
      await fs.writeFile(filePath, '[]', 'utf-8');
    }
    list = [];
  }

  // 4️⃣ duplicate check
  if (list.includes(email)) {
    return NextResponse.json(
      { error: 'This email is already subscribed.' },
      { status: 409 }
    );
  }

  // 5️⃣ append + save
  list.push(email);
  await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');

  return NextResponse.json({ success: true });
}
