// src/security/auth.ts
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

import { db } from '@/_undeveloped/drizzle/db';
import { UserTable } from '@/_undeveloped/drizzle/schema/user';
import type { InferSelectModel } from 'drizzle-orm';
import { z } from 'zod';

const credentialsSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(8).max(72), // bcrypt 72 char limit
});

type DBUser = InferSelectModel<typeof UserTable>;

export const { handlers, signIn, signOut, auth } = NextAuth(
  {
    providers: [
      Google,
      GitHub,
      Credentials({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (raw) => {
          const parsed = credentialsSchema.safeParse(raw);
          if (!parsed.success) return null;
          const { email, password } = parsed.data;

          const user: DBUser | undefined = await db
            .select()
            // list columns explicitly to avoid selecting passwordHash unless needed
            .from(UserTable)
            .where(eq(UserTable.email, email))
            .limit(1)
            .then((r) => r[0]);

          if (!user || !user.passwordHash) return null;

          const ok = await bcrypt.compare(
            password,
            user.passwordHash
          );
          if (!ok) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        },
      }),
    ],
    session: { strategy: 'jwt' },
    callbacks: {
      authorized({ request, auth }) {
        // Example guard; customize per route
        if (
          request.nextUrl.pathname.startsWith('/session') &&
          !auth
        )
          return false;
        return true;
      },
      async jwt({ token, trigger, session }) {
        if (trigger === 'update' && session?.user?.name) {
          token.name = session.user.name;
        }
        // Attach role if first time (after credentials/GitHub/Google sign in)
        if (token.email && !token.role) {
          const user = await db
            .select({ role: UserTable.role })
            .from(UserTable)
            .where(eq(UserTable.email, token.email))
            .limit(1)
            .then((r) => r[0]);
          if (user) token.role = user.role;
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user) {
          session.user.role = token.role as
            | string
            | undefined;
        }
        return session;
      },
    },
    experimental: { enableWebAuthn: true },
  }
);
