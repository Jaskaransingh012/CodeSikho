"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function EnrolledCourses() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    return (
        <div className='mt-8'>
            <h2 className='text-3xl mb-2 font-game'>Your enrolled Courses</h2>
            {enrolledCourses?.length <= 0. ?
                // If
                <div className='flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900'>
                    <Image src={'/books.png'} alt='books' width={90} height={90} />
                    <h2 className='font-game text-xl'>
                        Don't have any enrolled courses.
                    </h2>
                    <Link href={'/courses'}>
                        <Button className='font-game text-2xl' variant={'pixel'} size={'lg'}>Explore Courses</Button>
                    </Link>


                </div>


                :



                // Else
                <div>

                </div>}
        </div>
    )
}

export default EnrolledCourses