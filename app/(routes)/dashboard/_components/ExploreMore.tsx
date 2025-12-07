import Image from 'next/image';
import React from 'react'

function ExploreMore() {

    const ExplorMoreOptions = [
        {
            id: 1,
            title: 'Quizz Pack',
            desc: 'Practice what you learned with bite-sized code challenges.',
            icon: '/tree.png'
        },
        {
            id: 2,
            title: 'Video Courses',
            desc: 'Learn with structured video lessons taught step-by-step.',
            icon: '/game.png'
        },
        {
            id: 3,
            title: 'Community Project',
            desc: 'Build real-world apps by collaborating with the community.',
            icon: '/growth.png'
        },
        {
            id: 4,
            title: 'Explore Apps',
            desc: 'Explore Prebuild apps which you can try',
            icon: '/start-up.png'
        }
    ];

    return (
        <div>
            <h2 className='text-3xl font-game mb-2 mt-8'>
                Explore More
            </h2>
            <div className='grid grid-cols-2 gap-5'>
                {ExplorMoreOptions.map((option, index) => (
                    <div key={index} className='flex gap-2 p-2 rounded-xl border bg-zinc-900'>
                        <Image src={option?.icon} alt={option?.icon}
                            width={80}
                            height={80}
                        />
                        <div>
                            <h2 className='font-medium font-game text-2xl'>{option?.title}</h2>
                            <p className='font-game text-gray-400'>{option?.desc}</p>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default ExploreMore