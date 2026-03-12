import React from 'react'
import { courseExcercise, ExcerciseData } from '../page'
import { Skeleton } from '@/components/ui/skeleton'
import { Lightbulb } from 'lucide-react'
type props = {
    excerciseData: courseExcercise | undefined,
    loading: boolean
}

function ContentSection({ excerciseData, loading }: props) {

    const contentInfo = excerciseData?.excerciseData

    return (
        <div className='p-10 mb-28'>
            {
                loading || !contentInfo ?
                    <Skeleton className='h-full w-full m-10 rounded-2xl' />
                    :
                    <div>
                            <h2 className='text-4xl my-3 font-game'>{contentInfo?.excerciseName}</h2>
                            <div dangerouslySetInnerHTML={{ __html: contentInfo?.excerciseContent?.content }} />

                            <div>
                                <h2 className='font-game text-2xl mt-4 mb-3'>Task</h2>
                                <div className='p-4 border rounded-2xl bg-zinc-800' dangerouslySetInnerHTML={{__html:contentInfo?.excerciseContent?.task}} />
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-game text-2xl mt-4 mb-3 flex gap-3 items-center text-yellow-400'><Lightbulb /> Hint</h2>
                                <div className='p-4 border rounded-2xl bg-zinc-800' dangerouslySetInnerHTML={{__html:contentInfo?.excerciseContent?.hint}} />
                            </div>
                    </div>
                    

            }

        </div>

    )
}

export default ContentSection