import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow uppercase sticky top-0 z-50 ">
            <div className="container px-6 py-4">
                <div className="flex  justify-between">

                    <div className="text-xl font-bold text-gray-800">
                        My Portfolio
                    </div>

                    <div className="hidden md:block absolute right-20">

                        <ul className="flex">
                            <li className='mr-6'>
                                <Link
                                    to="/portofolio"
                                    className={ `${ location.pathname === '/portofolio' || location.pathname === '/portofolio/' ? 'text-md rounded underline py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-md font-semibold hover:text-gray-900 py-1 px-3' }` }
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    to="/portofolio/about"
                                    className={ ` ${ location.pathname === '/portofolio/about' ? 'text-md rounded py-1 px-3 bg-blue-500 underline text-white' : 'text-gray-800 text-md font-semibold hover:text-gray-900 py-1 px-3' }` }
                                >
                                    About
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    to="/portofolio/project"
                                    className={ ` ${ location.pathname === '/portofolio/project' ? 'text-md rounded py-1 px-3 bg-blue-500 underline text-white' : 'text-gray-800 text-md font-semibold hover:text-gray-900 py-1 px-3' }` }
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className='mr-6'>
                                <Link
                                    to="/portofolio/contact"
                                    className={ ` ${ location.pathname === '/portofolio/contact' ? 'text-md rounded py-1 px-3 bg-blue-500 underline text-white' : 'text-gray-800 text-md font-semibold hover:text-gray-900 py-1 px-3' }` }
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>

                    {/* Hamburger button */ }
                    <div className="md:hidden ">
                        <button onClick={ toggleMenu } className="text-gray-800 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            { isOpen ? (
                                <RiCloseLine size={ 30 } />
                            ) : (
                                <RxHamburgerMenu size={ 25 } />
                            ) }
                        </button>
                    </div>
                </div>

                <div className={ `md:hidden ${ isOpen ? 'block' : 'hidden' }` }>
                    <div className="pt-2 pb-3 text-md flex flex-col">
                        <Link
                            to="/portofolio"
                            className={ `${ location.pathname === '/portofolio' || location.pathname === '/portofolio/' ? ' border underline text-sm border-blue-500 rounded py-1 px-3  bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3 ' }` }
                        >
                            Home
                        </Link>
                        <Link
                            to="/portofolio/about"
                            className={ ` ${ location.pathname === '/portofolio/about' ? ' border underline text-sm border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3 ' }` }
                        >
                            About
                        </Link>
                        <Link
                            to="/portofolio/project"
                            className={ ` ${ location.pathname === '/portofolio/project' ? ' border underline text-sm border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3 ' }` }
                        >
                            Projects
                        </Link>
                        <Link
                            to="/portofolio/contact"
                            className={ ` ${ location.pathname === '/portofolio/contact' ? ' border underline text-sm border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3 ' }` }
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;