"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseDetailBanner from './_components/CourseDetailBanner';
import axios from 'axios';
import { Course } from '../_components/CoursesList';
import Image from 'next/image';
import CourseChapters from './_components/CourseChapters';
import CourseStatus from './_components/CourseStatus';
import UpgradeToPro from '../../dashboard/_components/UpgradeToPro';
import CommunityHelp from './_components/CommunityHelp';




function page() {
    const {courseId} = useParams();
    const [courseDetail, setCourseDetail] = useState<Course>();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        courseId && getCourseDetail();
    },[])

    const getCourseDetail = async ()=>{
        setLoading(true);
        const result = await axios.get(`/api/course?courseId=${courseId}`);
        console.log(result)
        setCourseDetail(result?.data);
        setLoading(false);
        
    }

    if (loading) {
            return <div className='flex items-center justify-center w-full h-[80vh]'>
                <Image src={'/Loader.gif'} width={400} height={400} alt='loader' />
            </div>
        }
  return (
    <div>
        <CourseDetailBanner loading={loading} courseDetail={courseDetail} refreshData={()=>getCourseDetail()} />
        <div className='grid grid-cols-3 gap-10 p-10 md:px-24 lg:px-36'>
            <div className='col-span-2'>
                <CourseChapters loading={loading} courseDetail={courseDetail} />
            </div>
            <div>
                <CourseStatus courseDetail={courseDetail} />
                <UpgradeToPro />
                <CommunityHelp />
            </div>
        </div>
    </div>
  )
}

export default page