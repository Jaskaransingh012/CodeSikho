import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

const courses = [
    {
        id:1,
        name:"HTML",
        desc :"Learn the fundamentals of the Html and build the structure of modern website",
        path: "/courses/1/detail"
    },
    {
        id:2,
        name:"CSS",
        desc :"Learn how to style your website using CSS and make it visually appealing",
        path: "/courses/2/detail"
    },
    {
        id:3,
        name:"JavaScript",
        desc :"Learn how to add interactivity to your website using JavaScript and make it dynamic",
        path: "/courses/3/detail"
    },
    {
        id:4,
        name:"React",
        desc :"Learn how to build reusable UI components using React and make your website more efficient",
        path: "/courses/4/detail"
    },
    {
        id:5,
        name:"Next.js",
        desc :"Learn how to build server-side rendered websites using Next.js and make your website more scalable",
        path: "/courses/5/detail"
    }
]


function Header() {
    return (
        <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
            <div className='flex gap-2 items-center'>
                <Image src={"/logo.png"} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-3xl font-game'>CodeSikho</h2>
            </div>


            {/* Navbar */}
            <NavigationMenu>
                <NavigationMenuList className='gap-4'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-2 sm:w-[400px] md:w-[500px] lg:w-[600px]'>
                                {courses.map((course, index) => (
                                    <div key={index} className='p-2 hover:bg-accent rounded-2xl cursor-pointer'>
                                        <h2 className='font-medium'>{course.name}</h2>
                                        <p className='text-sm text-gray-500'>{course.desc}</p>
                                    </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/projects'} >
                                Projects
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/pricing'} >
                                Pricing
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/contact-us'} >
                                Contact Us
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                </NavigationMenuList>


            </NavigationMenu>

            {/* Signup button */}
            <Button variant={'pixel'} className='font-game text-2xl'>Signup</Button>
        </div>
    )
}

export default Header