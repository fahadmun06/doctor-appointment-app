import './Home.scss';
import React from 'react';
import HomeHeader from './HomeComponents/HomeHeader';
import { } from 'react-icons/ai'
import Doctors from '../Doctors/Doctors';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <HomeHeader />
            {/* <h1 className='text-[#005659] font-bold text-[2rem] my-10'>Doctor Details</h1> */}
            <Doctors />
        </main>
    );
}
