import { ThemeToggle } from '@/utils/themeConfig/theme-toggle'
import React from 'react'

const Header = () => {
    return (
        <div >
            <nav className='flex justify-around py-5 bg-blue-900'>
                <ul className='flex justify-between w-[50%]'>
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Service</a></li>
                    <li><a href="#" className='text-white'>Blog</a></li>
                    <li><a href="#" className='text-white'>Contact</a></li>
                </ul>
                <ThemeToggle />
            </nav>
        </div>
    )
}

export default Header