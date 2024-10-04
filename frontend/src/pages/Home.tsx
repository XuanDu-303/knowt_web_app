import React from 'react'
import { DarkModeToggle } from '@/components/common/Button'

const Home: React.FC = () => {
    return (
        <div className="container min-h-screen min-w-full bg-white font-diaty dark:bg-gray-900 text-black dark:text-white">
            <div className="py-5">
                <h1 className="text-2xl font-bold">Dark Mode Toggle Example</h1>
                <DarkModeToggle />
            </div>
        </div>
    );
}

export default Home;