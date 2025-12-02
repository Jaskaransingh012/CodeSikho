import { Button } from '@/components/ui/button'
import React from 'react'

function CommunityHelp() {
  return (
    <div className='font-game p-4 py-10 border-4 rounded-2xl mt-10 flex items-center flex-col gap-5'>
        <h2 className='text-3xl'> Need Help?</h2>
        <p className='text-2xl'>Ask question in our community!</p>
        <Button variant={'pixel'} size={'lg'} className='text-2xl'>Go to community</Button>
    </div>
  )
}

export default CommunityHelp