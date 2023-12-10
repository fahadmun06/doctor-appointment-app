import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';
import React from 'react'
import logo from '../../assets/clogo.png'
import { Link } from 'react-router-dom';
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='bg-white'>
            <div className='lg:flex lg:flex-1 py-16'>
                <div className="flex flex-1 justify-center lg:justify-around ms-8 lg:ms-0 mb-6 flex-wrap">
                    <div className='flex flex-col items-center'>
                        <Link to='/'>
                            <img src={logo} className='w-[6rem]' alt="" />
                        </Link>
                        <p>Powered By <a className='font-bold hover:text-blue-300 text-lg' href="https://muhammadfahad-06.web.app" target='__blank'>Muhammad Fahad</a> </p>
                    </div>
                    <div className='hidden lg:block'>
                        <h1 className='text-xl font-bold'>Legal Stuff</h1>
                        <ul className='list-reset mt-2 text-[15px]'>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">Privacy Notice</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">Cookie Policy</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">Term of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-1 justify-around flex-wrap">
                    <div>
                        <h1 className='text-xl font-bold'>Quick Links</h1>
                        <ul className='list-reset mt-2 text-[15px]'>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">Advertise with us</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">About Us</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Social Media</h1>
                        <ul className='list-reset mt-2 text-[15px]'>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#"><FaGithub className='inline-block text-black' /> GitHub</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#"><FaLinkedin className='inline-block text-blue-600' /> LinkedIn</a></li>
                            <li className='my-3 opacity-70 hover:text-blue-500'><a href="#"><FaInstagram className='inline-block text-red-500' /> Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='opacity-50 text-center text-gray-200 bg-[#036e72] mb-0 py-3'>&copy; {year} | All Rights Reserved</p>
        </footer>
    )
}
