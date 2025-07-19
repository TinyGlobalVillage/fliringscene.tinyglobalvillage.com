import { pgTable, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";
import { UserTable } from "@/drizzle/schema/user";

export const AccountTable = pgTable(
  "accounts",
  {
    provider: text().notNull(),          // e.g. 'github'
    providerAccountId: text().notNull(), // e.g. GitHub user id
    userId: text().notNull(),            // FK to users.id (add FK if desired)
    createdAt: timestamp({ withTimezone: true }).defaultNow(),
  },
  (t) => ({
    providerAccountUnique: uniqueIndex("accounts_provider_account_uid")
      .on(t.provider, t.providerAccountId),
  })
);
