"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { exercise } from '../../../_components/CoursesList';
import ContentSection from './_components/ContentSection';
import CodeEditor from './_components/CodeEditor';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export type courseExcercise = {
  courseId: number,
  chapterId: number,
  desc: string,
  name: string,
  excercises: exercise[],
  excerciseData: ExcerciseData
}

export type ExcerciseData = {
  courseId: number,
  chapterId: number,
  excerciseId: string,
  excerciseName: string,
  excerciseContent: ExerciseContent
}

type ExerciseContent = {
  content: string,
  hint: string,
  hintXp: string,
  starterCode: any,
  task: string

}
function playload() {


  const { courseId, chapterId, excerciseslug } = useParams();
  const [loading, setLoading] = useState(false);
  const [excerciseData, setExcerciseData] = useState<courseExcercise>();
  const [excerciseInfo, setExcerciseInfo] = useState<exercise>();

  const GetExcerciseCourseDetail = async () => {
    setLoading(true);
    console.log(excerciseslug)
    const result = await axios.post('/api/excercise', {
      courseId: courseId,
      chapterId: chapterId,
      excerciseId: excerciseslug?.toString()
    })

    console.log(result)

    setExcerciseData(result.data);
    setLoading(false);
  }

  const params = useParams();
  useEffect(() => {
    GetExcerciseCourseDetail();
  }, [])

  useEffect(()=>{
    document.body.style.overflow = 'hidden';

    return ()=>{
      document.body.style.overflow = '';
    }
  },[])

  useEffect(()=>{
    getExcerciseInfo();
  },[excerciseData])

  const getExcerciseInfo = ()=>{
    const excerciseInfo = excerciseData?.excercises?.find((item)=>{
      return item.slug==excerciseslug;
    })
    setExcerciseInfo(excerciseInfo);
  }
  return (

    <div className='border-t-4 flex flex-col'>
      <SplitterLayout percentage
        primaryMinSize={30}
        secondaryInitialSize={70}
      >
        <div>
          <ContentSection excerciseData={excerciseData} loading={loading} />
        </div>
        <div>
          <CodeEditor excerciseData={excerciseData} loading={loading} />
        </div>
      </SplitterLayout>
      <div className='flex fixed bottom-0 w-full justify-between p-4 font-game  bg-zinc-900'>
        <Button className='text-xl' variant={'pixel'}>Previous</Button>
        <div className='flex gap-3 items-center'>
          <Image src={'/star.png'} alt='star' width={40} height={40} />
          <h2 className='text-2xl'>You will get <span className='text-4xl text-yellow-300'>{excerciseInfo?.xp}</span>  Xp!</h2>
        </div>
        <Button className='text-xl' variant={'pixel'}>Next</Button>
      </div>


    </div>


  )
}

export default playload