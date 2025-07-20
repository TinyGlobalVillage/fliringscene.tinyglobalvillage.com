import { pgTable, pgEnum, timestamp, text, uniqueIndex } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { id, createdAt, updatedAt } from '../schemaHelpers';


export const userRoles = ["user", "admin", "guest"] as const;
export type UserRole = (typeof userRoles)[number];
export const userRoleEnum = pgEnum('user_role', userRoles);

export const UserTable = pgTable(
  'users',
  {
  id,
  email: text().notNull(),              // add unique index externally
  name: text().notNull(),
  role: userRoleEnum().notNull().default('user'),
  imageURL: text(),
  passwordHash: text(),                 // nullable if OAuth-only allowed
  deletedAt: timestamp({ withTimezone: true }),
  description: text().default(''),      // or make nullable
  createdAt,
  updatedAt,
},
 (table) => ({
    emailUniqueIdx: uniqueIndex('users_email_idx').on(table.email),
})
);

export const UserRelationships = relations(UserTable, ({ many }) => ({
  userCourseAccesses: many(UserCourseAccessTable),
}))
