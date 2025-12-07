
import { db } from "@/config/db";
import { completedExcerciseTable, corseChaptersTable, courseTable, EnrolledCourseTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const { searchParams } = new URL(req.url);
    const courseId = searchParams.get('courseId');
    const user = await currentUser();

    if (courseId) {
        const result = await db.select().from(courseTable).where(eq(courseTable.courseId, parseInt(courseId)));

        const chapterResult = await db.select().from(corseChaptersTable).where(eq(corseChaptersTable.courseId, parseInt(courseId)));

        // @ts-ignore
        const enrolledCourse = await db.select().from(EnrolledCourseTable).where(and(eq(EnrolledCourseTable?.courseId, courseId), eq(EnrolledCourseTable?.userId, user?.primaryEmailAddress?.emailAddress)));


        const isEnrolled = enrolledCourse?.length > 0 ? true : false;

        const completedExcercises = await db.select().from(completedExcerciseTable).where(
            // @ts-ignore
            and(eq(completedExcerciseTable?.courseId, courseId), eq(completedExcerciseTable?.userId, user?.primaryEmailAddress?.emailAddress))

        )
            .orderBy(desc(completedExcerciseTable?.courseId)
                , desc(completedExcerciseTable?.excerciseId)
            )

        return NextResponse.json({
            ...result[0],
            chapters: chapterResult,
            isEnrolled,
            enrolledCourseDetail: enrolledCourse[0],
            completedExcercises,
        });


    }
    else {
        const result = await db.select().from(courseTable);
        return NextResponse.json(result);
    }

}