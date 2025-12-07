import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function InviteFriend() {
  return (
    <div className='flex flex-col items-center mt-8 p-4 border bg-zinc-900'>
        <Image src={'/mail.png'} alt='mail' width={80} height={80} />
        <h2 className='text-3xl font-game'>Invite your friends</h2>
        <p className='font-game'>Having Fun? share the love with your friend. Enter the email we will send them an invite.</p>

        <div className='flex gap-2 items-center mt-5'>
            <Input placeholder='Enter the email' className='min-w-xl' />
            <Button className='font-game' size={'lg'} variant={'pixel'}>Invite</Button>
        </div>
    </div>
  )
}

export default InviteFriend