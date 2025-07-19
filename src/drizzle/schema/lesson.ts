import { pgTable, text, integer, pgEnum, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { createdAt, id, updatedAt } from '../schemaHelpers';
import { CourseTable } from './course';
import { CourseSectionTable } from './courseSection';
import { UserLessonCompleteTable } from './userLessonComplete';

export const lessonStatuses = ["public", "private", "draft", "preview"] as const;
export type LessonStatus = (typeof lessonStatuses)[number];
export const lessonStatusEnum = pgEnum("course_section_status", lessonStatuses);

export const LessonTable = pgTable('lessons', {
 id,
  name: text().notNull(),
  description: text().notNull(),
  youtubeVideoId: text().notNull(),
  order: integer().notNull(),
  status: lessonStatusEnum().notNull().default("draft"),
  sectionId: uuid().notNull().references(() => CourseSectionTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const LessonnRelationships = relations(LessonTable, ({one, many})=>({
    section: one(CourseSectionTable, {
        fields: [LessonTable.sectionId],
        references: [CourseSectionTable.id]
    }),
    userLessonComplete: many(UserLessonCompleteTable),
})
);
