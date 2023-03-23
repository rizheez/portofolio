import React, { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-800">
                        My Portfolio
                    </div>
                    <button
                        className="md:hidden rounded-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Toggle menu"
                        onClick={ toggleMenu }
                    >
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                            <path
                                fillRule="evenodd"
                                d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={ `${ isMenuOpen ? "block" : "hidden"
                        } md:flex items-center justify-between` }
                >
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a
                            className="text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3 block md:inline-block mt-4 md:mt-0"
                            href="#about"
                            onClick={ toggleMenu }
                        >
                            About
                        </a>
                        <a
                            className="text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3 block md:inline-block mt-4 md:mt-0"
                            href="#projects"
                            onClick={ toggleMenu }
                        >
                            Projects
                        </a>
                        <a
                            className="text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3 block md:inline-block mt-4 md:mt-0"
                            href="#contact"
                            onClick={ toggleMenu }
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;