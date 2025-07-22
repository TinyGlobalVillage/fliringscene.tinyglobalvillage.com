import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const { email } = await request.json();

  // validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required' },
      { status: 400 }
    );
  }

  // resolve the JSON file path
  const filePath = path.join(process.cwd(), 'src', 'data', 'subscribers.json');

  // read existing subscribers (or create/reset the file if missing/corrupt)
  let list: string[] = [];
  try {
    const text = await fs.readFile(filePath, 'utf-8');
    list = JSON.parse(text);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      // file doesn’t exist → create it
      await fs.writeFile(filePath, '[]', 'utf-8');
    } else {
      // invalid JSON or other error → reset it
      console.error('subscribers.json corrupted, resetting…', error);
      await fs.writeFile(filePath, '[]', 'utf-8');
    }
    list = [];
  }

  // append only if new
  if (!list.includes(email)) {
    list.push(email);
    await fs.writeFile(filePath, JSON.stringify(list, null, 2), 'utf-8');
  }

  return NextResponse.json({ success: true });
}
