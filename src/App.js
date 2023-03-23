import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import AOS from 'aos';
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseLine } from 'react-icons/ri'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



function App() {
  AOS.init();
  const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
      <nav className="bg-white shadow fixed top-0 z-10 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            <div className="text-xl font-bold text-gray-800">
              My Portfolio
            </div>

            <div className="hidden md:block">
              <div className="flex items-center text-xl">
                <Link
                  to="/portofolio"
                  className={ `${ location.pathname === '/portofolio' || location.pathname === '/portofolio/' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3' }` }
                >
                  Home
                </Link>
                <Link
                  to="/portofolio/about"
                  className={ ` ${ location.pathname === '/portofolio/about' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3' }` }
                >
                  About
                </Link>
                <Link
                  to="/portofolio/project"
                  className={ ` ${ location.pathname === '/portofolio/project' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3' }` }
                >
                  Projects
                </Link>
                <Link
                  to="/portofolio/contact"
                  className={ ` ${ location.pathname === '/portofolio/contact' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 py-1 px-3' }` }
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Hamburger button */ }
            <div className="md:hidden flex items-center">
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
            <div className="pt-2 pb-3 flex flex-col text-xl">
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
  return (
    <Router>
      <div className="font-opensans">
        <Navbar />

        <Routes>
          <Route path="/portofolio/about" element={ <About /> } />
          <Route path="/portofolio/project" element={ <Project /> } />
          <Route path="/portofolio/contact" element={ <Contact /> } />
          <Route path="/portofolio" element={ <Home /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
