import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='w-full relative h-screen overflow-hidden'>
            <Image src={'/hero.gif'} alt='hero' width={1000} height={1000}
                className='w-full h-full object-cover absolute inset-0'
            />

            <div className='absolute w-full flex flex-col mt-32 items-center'>
                <h2 className='font-bold font-game text-7xl'>
                    Start Your
                </h2>
                <h2
                    style={{
                        textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                    }} className='font-bold mt-8 text-9xl font-game text-yellow-400'>Coding Adventure</h2>

                <h2 className="mt-18 font-game text-4xl">Beginner friendly coding coursed!</h2>

                <Button variant={'pixel'} size={'lg'} className='text-3xl font-game mt-10'>Get Started</Button>


            </div>


        </div>
    )
}

export default Hero