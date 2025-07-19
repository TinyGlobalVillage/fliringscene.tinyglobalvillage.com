import { pgTable, text, integer, pgEnum, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { createdAt, id, updatedAt } from '../schemaHelpers';
import { CourseTable } from './course';
import { LessonTable } from './lesson';

export const courseSectionStatuses = ["public", "private", "draft"] as const;
export type CourseSectionStatus = (typeof courseSectionStatuses)[number];
export const courseSectionStatusEnum = pgEnum("course_section_status", courseSectionStatuses);

export const CourseSectionTable = pgTable('course_sections', {
 id,
  name: text().notNull(),
  status: courseSectionStatusEnum().notNull().default("draft"),
  order: integer().notNull(),
  courseId: uuid().notNull().references(() => CourseTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
});

export const CourseSectionRelationships = relations(CourseSectionTable, ({many, one})=>({
    course: one(CourseTable, {
        fields: [CourseSectionTable.courseId],
        references: [CourseTable.id]
    }),
    lessons: many(LessonTable),
})
);
