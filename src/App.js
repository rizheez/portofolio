import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import AOS from 'aos';
import { useLocation } from 'react-router-dom'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



function App() {
  AOS.init();
  const Navbar = () => {
    const location = useLocation();

    return (
      <nav className="bg-white shadow fixed top-0 w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">
              My Portfolio
            </div>
            <div className="flex items-center">
              <Link
                to="/portofolio"
                className={ `${ location.pathname === '/portofolio' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3' }` }
              >
                Home
              </Link>
              <Link
                to="/portofolio/about"
                className={ ` ${ location.pathname === '/portofolio/about' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3' }` }
              >
                About
              </Link>
              <Link
                to="/portofolio/project"
                className={ ` ${ location.pathname === '/portofolio/project' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3' }` }
              >
                Projects
              </Link>
              <Link
                to="/portofolio/contact"
                className={ ` ${ location.pathname === '/portofolio/contact' ? 'inline-block border underline border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'text-gray-800 text-sm font-semibold hover:text-gray-900 mx-3' }` }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
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
