import { pgTable, text, integer, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { id, createdAt, updatedAt } from '../schemaHelpers';
import { CourseProductTable } from './courseProduct';

export const productStatuses = ["public", "private", "draft"] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable('products', {
  id,
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text().notNull(),
  priceInDollars: integer().notNull(),
  status: productStatusEnum().notNull().default("draft"),
  createdAt,
  updatedAt,
});

export const ProductRelationships = relations(
  ProductTable,
  ({ many }) => ({
    courseProducts: many(CourseProductTable),
  })
);
