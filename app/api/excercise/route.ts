import { db } from "@/config/db";
import { corseChaptersTable, excerciseTable } from "@/config/schema";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {courseId, chapterId, excerciseId} = await req.json();
    
    const courseResult = await db.select().from(corseChaptersTable)
    .where(and(eq(corseChaptersTable?.courseId, courseId), eq(corseChaptersTable?.chapterId, chapterId)));


    const excerciseData = await db.select().from(excerciseTable)
    .where(and(eq(excerciseTable?.courseId, courseId), eq(excerciseTable?.excerciseId, excerciseId)));

    return NextResponse.json({
        ...courseResult[0],
        excerciseData:excerciseData[0],
    })
}