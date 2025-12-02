"use client";
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'


function UserStatus() {
    const {user} = useUser();
  return (
    <div className='p-4 border-2 rounded-2xl'>
        <div className='flex gap-1 items-center'>

       
        <Image src={'/alex_walk.gif'} alt='alex walk' width={50} height={50} />
        <h2 className='font-game text-xl'>{user?.primaryEmailAddress?.emailAddress}</h2>

         </div>

         <div className="grid grid-cols-2 gap-5">
            <div className='flex items-center gap-3' >
                <Image src={'/star.png'} alt='star' width={35} height={35} />
                <div className=''>
                  <h2 className='text-3xl font-game'>20</h2>
                  <h2 className='font-game text-xl text-gray-500'>Total Rewards</h2>
                </div>
            </div>
            <div className='flex items-center gap-3' >
                <Image src={'/badge.png'} alt='star' width={35} height={35} />
                <div className=''>
                  <h2 className='text-3xl font-game'>3</h2>
                  <h2 className='font-game text-xl text-gray-500'>Total Badges</h2>
                </div>
            </div>
            <div className='flex items-center gap-3' >
                <Image src={'/fire.png'} alt='star' width={35} height={35} />
                <div className=''>
                  <h2 className='text-3xl font-game'>7</h2>
                  <h2 className='font-game text-xl text-gray-500'>Streak</h2>
                </div>
            </div>
         </div>
    </div>
  )
}

export default UserStatus