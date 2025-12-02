"use client";
import axios from 'axios'
import { ChartNoAxesColumnIncreasingIcon } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export type Course = {
    id: number,
    courseId: number,
    courseTitle: string,
    desc: string,
    bannerImage: string,
    level: string,
    tags: string
    chapters?: Chapter[]
}

type Chapter = {
    chapterId: number,
    courseId: number,
    desc: string,
    name: string,
    id: number,
    excercises: exercise[]
}

type exercise={
    name: string,
    slug: string,
    xp: number,
    difficulity: string
}

function CoursesList() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllCourses();
    }, [])

    const getAllCourses = async () => {
        setLoading(true);
        const result = await axios.get('/api/course');
        console.log(result)
        setCourses(result?.data);
        setLoading(false);
    }

    if (loading) {
        return <div className='flex items-center justify-center w-full h-[45vh]'>
            <Image src={'/Loader.gif'} width={400} height={400} alt='loader' />
        </div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:grid-cols-3 mt-2'>
            {
                courses?.map((course, index) => (
                    <Link href={`/courses/${course?.courseId}`} key={index} >

                        <div className='border-4 rounded-xl hover:bg-zinc-900 cursor-pointer'>

                            <Image className='w-full h-[200px] object-cover rounded-t-lg' src={course?.bannerImage} width={400} height={400} alt={course.courseTitle} />
                            <div className='p-4'>
                                <h2 className="font-game text-2xl">{course?.courseTitle}</h2>
                                <p className='text-xl font-game text-gray-500 line-clamp-2'>{course?.desc}</p>
                            </div>
                            <h2 className='bg-zinc-900 flex gap-2 items-center p-2 rounded-2xl w-fit mt-3 font-game'>
                                <ChartNoAxesColumnIncreasingIcon className='w-3 h-4' />
                                {course?.level}
                            </h2>

                        </div>
                    </Link>

                ))}
        </div>
    )
}

export default CoursesList