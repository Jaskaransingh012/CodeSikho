import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UpgradeToPro() {
    return (
        <div className='flex items-center flex-col gap-2 p-5 border-2 rounded-2xl mt-8'>
            <Image src={'/logo.png'} alt='logo' width={60} height={60} />
            <h2 className='text-3xl font-game'>Upgrade to pro</h2>
            <p className='font-game text-gray-500 text-xl'>Join pro membership and get all courses access</p>
            <Link className='min-w-full' href={'/pricing'} >
            <Button className='text-3xl w-full  font-game' variant={'pixel'} size={'lg'}>Upgrade</Button>
            </Link>
            
        </div>
    )
}

export default UpgradeToPro