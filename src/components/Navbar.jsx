import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../assets/index.js';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = path => {
    return location.pathname === path;
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo and Brand */}
          <div className='flex-shrink-0'>
            <Link to='/' className='flex items-center space-x-4 group'>
              <div className='relative'>
                <img
                  src={assets.logo}
                  alt='VivasayaThozhan Logo'
                  className='h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300'></div>
              </div>
              <div className='flex flex-col'>
                <span className='text-2xl font-display font-bold text-gray-800 tracking-tight'>
                  VivasayaThozhan
                </span>
                <span className='text-xs font-sans text-gray-500 font-medium'>
                  Farm Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-6 py-3 rounded-xl text-sm font-sans font-semibold transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-8 ${
                    isActive(link.path) ? 'w-8' : ''
                  }`}
                ></span>
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to='/contact'
              className='ml-6 font-sans bg-gradient-to-r from-green-500 to-blue-600 text-white md:px-2.5 lg:px-5 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-green-600 hover:to-blue-700'
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-all duration-200'
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className='px-4 pt-4 pb-8 space-y-2 bg-white/90 backdrop-blur-sm rounded-b-2xl border-t border-gray-100'>
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-500'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className='pt-4'>
              <Link
                to='/contact'
                onClick={() => setIsMenuOpen(false)}
                className='block font-sans bg-gradient-to-r from-green-500 to-blue-600 text-white px-0 py-3 rounded-lg text-sm font-medium text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300'
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
