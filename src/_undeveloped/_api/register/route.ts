// app/api/register/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/_undeveloped/drizzle/db';
import { UserTable } from '@/_undeveloped/drizzle/schema/user';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // (Optional fast pre-check – still race prone, DB enforces final truth)
    // const exists = await db.select({ id: UserTable.id })
    //   .from(UserTable).where(eq(UserTable.email, email)).limit(1);
    // if (exists.length) return NextResponse.json({ error: "Email already registered" }, { status: 409 });

    const hash = await bcrypt.hash(password, 12);

    await db.insert(UserTable).values({
      email,
      name,
      passwordHash: hash,
      role: 'user',
      description: '',
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    if (e.code === '23505') {
      // Postgres unique_violation
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }
    console.error(e);
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}
