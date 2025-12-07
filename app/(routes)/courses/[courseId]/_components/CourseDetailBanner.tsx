import React, { useState } from 'react'
import { Course } from '../../_components/CoursesList';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { toast } from 'sonner';


type Props = {
    loading: boolean;
    courseDetail: Course | undefined;
    refreshData: ()=> void
}

function CourseDetailBanner({ loading, courseDetail, refreshData }: Props) {

    const [loading_, setLoading_] = useState(false);

    const EnrollCourse = async () => {
        setLoading_(true);
        const result = await axios.post('/api/enroll-course',{
            courseId:courseDetail?.courseId
        })
        toast.success("Enrolled Successfully");
        refreshData();



        setLoading_(false);
    }


    return (
        <div>
            {
                !courseDetail ?
                    <Skeleton className='w-full h-[300px]' /> :
                    <div className='relative'>
                        <Image src={courseDetail?.bannerImage} alt='course banner' className='w-full h-[350px] object-cover' width={1200} height={300} />

                        <div className='font-game absolute top-0 bg-linear-to-r from-black/80 to-white-50/50 p-24 h-full'>
                            <h2 className='text-6xl'>{courseDetail?.courseTitle}</h2>

                            <p className='text-3xl text-gray-300'>{courseDetail?.desc}</p>

                            
                            {
                                !courseDetail?.isEnrolled ?
                                 <Button disabled={loading_} 
                            onClick={EnrollCourse}
                            className='text-2xl mt-7' variant={'pixel'} size={'lg'}>
                                {loading_ && <Loader2Icon/>}
                                Enroll Now
                                
                                
                            </Button>
                            :
                            <Button variant={'pixel'} size={'lg'} className='text-2xl mt-7'>Continue Learning.....</Button>



                            }
                           
                        </div>
                    </div>
            }

        </div>
    )
}

export default CourseDetailBanner