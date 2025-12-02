import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Course } from '../../_components/CoursesList'

type props = {
    courseDetail: Course | undefined

}

function CourseStatus({courseDetail}: props) {

    useEffect(()=>{
        courseDetail&& getCounts();
    },[courseDetail])

    const[excerciseBar, setExcerciseBar] = useState(0); 

    const [counts, setCounts] = useState<{
        totalExcercises: number;
        totalXP: number;
    }>();

    const getCounts = ()=>{
        let totalExcercises = 0;
        let totalXP = 0;
        courseDetail?.chapters?.forEach((chapter)=>{
            totalExcercises += chapter?.excercises?.length
            chapter?.excercises?.forEach((excercise)=>{
                totalXP += excercise?.xp
            })
        })

        setCounts({
            totalExcercises:totalExcercises,
            totalXP:totalXP
        })
        setTimeout(() => {
                setExcerciseBar(100); 
            }, 2000); 
    }


  return (
    <div className='font-game p-4 border-4 rounded-2xl w-full'>
        <h2 className='text-3xl'> Course Progress</h2>
        <div className='flex items-center mt-4 gap-5'>
            <Image src={'/book.png'} alt='book' width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl w-full'>Excercises <span className='text-gray-400'>1/{counts?.totalExcercises}</span></h2>
                <Progress
                className="mt-2 transition-all duration-3000 ease-out"
                value={excerciseBar} />
            </div>
        </div>
        <div className='flex items-center mt-4 gap-5'>
            <Image src={'/star.png'} alt='book' width={50} height={50} />
            <div className='w-full'>
                <h2 className='flex justify-between text-2xl w-full'>XP Earned <span className='text-gray-400'>{counts?.totalXP}</span></h2>
                 <Progress 
                        value={32}
                        className="mt-2 transition-all duration-[1500ms] ease-out"
                    />
            </div>
        </div>
        
    </div>
  )
}

export default CourseStatus