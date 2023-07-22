import React, { useContext, useState } from 'react';
import {
  Bars4Icon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }


  return (
    <div className=''>
      <div className=' px-4'>
        <div className='relative flex items-center justify-between'>
          {/* Logo Section */}
          <div className='navbar '>
            <div className='navbar-start'>
              <Link to='/' className=' text-xl font-bold tracking-wide text-[#026eb7] '>
                JobHub
              </Link>
            </div>

            <div className='navbar-end'>
              {/* Nav Items Section */}
              <div className='mr-3'>
                <ul className='items-center hidden space-x-8 lg:flex '>
                  <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'>
                    <NavLink
                      to='/'
                      className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'>
                    <NavLink
                      to='/about'
                      className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'>
                    <NavLink
                      to='/contact'
                      className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                      Contact Us
                    </NavLink>
                  </li>

                </ul>
              </div>
              {user ?
                <button onClick={handleLogOut} className="btn rounded-none  border-[#026eb7] hover:bg-[#026eb7] hover:text-white">Sign Out</button> :
                <Link to="/signIn">
                  <button className="btn rounded-none  border-[#026eb7] 
                     hover:bg-[#026eb7] hover:text-white">Sign In</button>
                </Link>
              }
            </div>
          </div>
          {/* Mobile Navbar Section */}
          <div className='lg:hidden'>
            {/* Dropdown Open Button */}
            <button
              aria-label='Open Menu'
              title='Open Menu'
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars4Icon className='w-5 text-gray-600' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link to='/' className=' text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        JobHub
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link to='/' className='default font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/about'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/contact'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-[#026eb7]'
                        >
                          Contact Us
                        </Link>
                      </li>

                      {user ?
                        <button onClick={handleLogOut} className="btn rounded-none  border-[#026eb7] hover:bg-[#026eb7] hover:text-white">Sign Out</button> :
                        <Link to="/signIn">
                          <button className="btn rounded-none  border-[#026eb7] 
                     hover:bg-[#026eb7] hover:text-white">Sign In</button>
                        </Link>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;