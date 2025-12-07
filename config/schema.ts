import { desc } from "drizzle-orm";

import { integer, json, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points:integer().default(0),
  subscription:varchar()
});

export const courseTable = pgTable("courses", {
  id : integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  courseTitle: varchar().notNull(),
  desc: varchar().notNull(),
  bannerImage: varchar().notNull(),
  level: varchar().default("Beginner"),
  tags: varchar(),
})

export const corseChaptersTable = pgTable("courseChapters", {
    id : integer().primaryKey().generatedAlwaysAsIdentity(),
    courseId: integer().notNull(),
    name: varchar(),
    desc: varchar(),
    excercises: json()
})


export const EnrolledCourseTable = pgTable("enrolledCourses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  userId: varchar(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned: integer().default(0)
})


export const completedExcerciseTable = pgTable("completedExcercise", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  chapterId: integer(),
  excerciseId:integer(),
  userId:varchar()
  
})