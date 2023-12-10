import './Navbar.scss';
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CgClose, CgMenu } from 'react-icons/cg'
import { MdArrowRightAlt } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'
import logo from '../../assets/clogo.png'


export default function Navbar() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        if (location.pathname !== window.location.pathname) {
            setMobileMenuOpen(false);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [location]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-[#3ab2b6] text-gray-200 shadow-sm ${isSticky ? 'sticky-header' : ''} main-section z-50`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/'>
                        <img src={logo} className='w-[6rem]' alt="" />
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <CgMenu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 gap-x-8 lg:justify-end">
                    <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Home</Link>
                    <Link to='/appointment' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Appoinments</Link>
                    {/* <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Services</Link> */}
                    <Link to='/doctors-details' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Doctors</Link>
                    <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Contact</Link>
                </div>
                {/* <Link to='/' className='hidden lg:flex lg:flex-1 items-center gap-2 lg:justify-end'>
                    <span className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>
                        Login
                    </span>
                    <MdArrowRightAlt />
                </Link> */}
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#315bb4]/10">
                    <div className="flex items-center justify-between">
                        <input className='w-10/12 text-sm bg-slate-300 text-slate-950 p-2 rounded-lg' type="text" placeholder='Discover news, articles and more..' />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <CgClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-10 flow-root">
                        <div className="-my-6 divide-y text-[#3498db]">
                            <div className="space-y-3 py-6 flex flex-1 items-center gap-2 flex-col">
                                <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Home</Link>
                                <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Appoinments</Link>
                                {/* <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Services</Link> */}
                                <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Doctors</Link>
                                <Link to='/' className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Contact</Link>
                                {/* <Link to='/' className='flex flex-1 items-center gap-2'>
                                    <span className={`text-[16px] ${isSticky ? 'sticky-header' : ''} font-semibold`}>Login</span>
                                    <MdArrowRightAlt />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
