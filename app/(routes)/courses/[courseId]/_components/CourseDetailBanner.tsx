import React from 'react'
import { Course } from '../../_components/CoursesList';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

type Props = {
    loading: boolean;
    courseDetail: Course | undefined;
}

function CourseDetailBanner({ loading, courseDetail }: Props) {
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

                            <Button className='text-2xl mt-7' variant={'pixel'} size={'lg'}>Enroll Now</Button>
                        </div>
                    </div>
            }

        </div>
    )
}

export default CourseDetailBanner