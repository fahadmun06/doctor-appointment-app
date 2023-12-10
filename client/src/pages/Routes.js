import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Frontend from './Frontend'
import Header from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import NewsLetter from '../components/Footer/NewsLetter/NewsLetter'
export default function Index() {

    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className='flex-1 min-h-screen'>
                    <Routes>
                        <Route path='/*' element={<Frontend />} />
                    </Routes>
                </main>
                <NewsLetter />
                <Footer />
            </div>
        </>
    )
}
