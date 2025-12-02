import Image from 'next/image'
import React from 'react'
import CoursesList from './_components/CoursesList'

function Courses() {
  return (
    <div>

        <div className='relative'>
            <Image src={'/course-banner.gif'} alt="course banner"
            className='w-full h-[300px] object-cover'
            width={1200} height={300} />
            <div className='absolute top-0 h-full p-24 px-10 md:px-24 lg:px-36
            bg-linear-to-r from-black/80 to-white-50/50
            '>
                <h2 className='font-game text-6xl '>Explore All Courses</h2>
                <p className='font-game text-3xl'>Explore all courses and enroll to learn </p>
            </div>
        </div>

        <div className='mt-8 px-10 md:px-24 lg:px-36'>
            <h2 className='font-game text-4xl'>All Courses</h2>
            <CoursesList />

        </div>
        
    </div>
  )
}

export default Courses