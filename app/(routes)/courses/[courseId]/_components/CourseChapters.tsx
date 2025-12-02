import React from 'react'
import { Course } from '../../_components/CoursesList';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
// import { TooltipTrigger } from '@radix-ui/react-tooltip';

type Props = {
  loading: boolean;
  courseDetail: Course | undefined;
}
function CourseChapters({ loading, courseDetail }: Props) {
  return (
    <div>
      {
        courseDetail?.chapters?.length === 0 ? <p className='text-2xl text-gray-400'>No chapters found</p>

          : <div className='p-5 border-4 rounded-xl '>
            {courseDetail?.chapters?.map((chapter, index) => (
              <Accordion type="single" className='cursor-pointer' collapsible key={index}>
                <AccordionItem value="item-1" className=''>
                  <AccordionTrigger className='p-3 hover:bg-zinc-800 font-game text-4xl'>
                    <div className='flex items-center gap-8'>
                      <h2 className='h-10 w-10 bg-zinc-800 text-center rounded-2xl'>
                        {index + 1}
                      </h2>
                      <h2 className='text-2xl'>
                        {chapter?.name}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className=''>
                    <div className='p-7 bg-zinc-900 rounded-xl'>
                      {chapter?.excercises?.map((excercise, excIndex) => (
                        <div key={index} className='flex items-center mt-7 justify-between'>
                          <div className='flex items-center gap-10 font-game'>

                            <h2 className=' text-3xl '>Excercise {(index * chapter?.excercises.length) + excIndex + 1}</h2>
                            <h2 className='text-3xl '>{excercise.name}</h2>
                            
                          </div>
                          {/* <Button className='text-2xl font-game' size={'lg'} variant={'pixel'}>{excercise?.xp} xp</Button> */}

                          <Tooltip>
                            <TooltipTrigger>
                              <Button className='text-2xl font-game' size={'lg'} variant={'pixelDisabled'}>???</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-lg font-game text-gray-500'>First Enroll</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          
                          

                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
      }
    </div>

  )
}

export default CourseChapters