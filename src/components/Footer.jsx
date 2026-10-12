import React from 'react';
import { Link } from 'react-router-dom';
import FadeInText from './Animation/FadeInText';
import ScaleInImage from './Animation/ScaleInImage';
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaSeedling,
  FaUsers,
  FaChartLine,
  FaMobileAlt,
  FaLeaf,
  FaTractor,
  FaSun,
  FaHome,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className='relative bg-gradient-to-br from-primary/95 via-primary to-earth/90 text-white overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-10 left-10 text-6xl animate-pulse text-green-300'>
          <FaLeaf />
        </div>
        <div className='absolute top-20 right-20 text-5xl animate-pulse delay-1000 text-yellow-300'>
          <FaTractor />
        </div>
        <div className='absolute bottom-20 left-20 text-5xl animate-pulse delay-2000 text-green-400'>
          <FaSeedling />
        </div>
        <div className='absolute bottom-10 right-10 text-6xl animate-pulse delay-500 text-orange-300'>
          <FaSun />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse delay-1500 text-blue-300'>
          <FaHome />
        </div>
      </div>

      <div className='relative z-10 py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12'>
            {/* Brand Section */}
            <div className='text-center lg:text-left'>
              <ScaleInImage>
                <div className='mb-6'>
                  <h3 className='text-3xl md:text-4xl font-bold font-tamil mb-2'>
                    விவசாய தோழன்
                  </h3>
                  <h4 className='text-xl md:text-2xl font-semibold font-english opacity-90'>
                    VivasayaThozhan
                  </h4>
                </div>
              </ScaleInImage>

              <FadeInText>
                <p className='text-white/80 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0'>
                  Pride of our soil. Voice of our people. Connecting NRI farmers
                  with their roots through comprehensive agricultural services.
                </p>
              </FadeInText>

              <ScaleInImage>
                <div className='flex justify-center lg:justify-start space-x-3'>
                  <a
                    href='https://wa.me/918056555557'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-green-500/80 backdrop-blur-sm rounded-full p-3 hover:bg-green-500 hover:scale-110 transition-all duration-300 group'
                    title='WhatsApp'
                  >
                    <FaWhatsapp className='text-2xl text-white' />
                  </a>
                  <a
                    href='https://www.instagram.com/vivasayathozhaan/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-pink-500/80 backdrop-blur-sm rounded-full p-3 hover:bg-pink-500 hover:scale-110 transition-all duration-300 group'
                    title='Instagram'
                  >
                    <FaInstagram className='text-2xl text-white' />
                  </a>
                  <a
                    href='tel:+918056555557'
                    className='bg-blue-500/80 backdrop-blur-sm rounded-full p-3 hover:bg-blue-500 hover:scale-110 transition-all duration-300 group'
                    title='Call Us'
                  >
                    <FaPhone className='text-2xl text-white' />
                  </a>
                </div>
              </ScaleInImage>
            </div>

            {/* Navigation Links */}
            <div className='text-center'>
              {/* Top divider - only on small screens */}
              <div className='block lg:hidden border-t border-white/20 mb-6'></div>
              
              <FadeInText>
                <h4 className='text-xl font-bold mb-6 text-white/90'>
                  Quick Navigation
                </h4>
              </FadeInText>

              <div className='space-y-3'>
                {navigationLinks.map((link, index) => (
                  <ScaleInImage key={link.name} delay={index * 0.1}>
                    <Link
                      to={link.path}
                      className='block text-white/80 hover:text-white hover:scale-105 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-sm'
                    >
                      {link.name}
                    </Link>
                  </ScaleInImage>
                ))}
              </div>
              
              {/* Bottom divider - only on small screens */}
              <div className='block lg:hidden border-b border-white/20 mt-6'></div>
            </div>

            {/* Our Services */}
            <div className='text-center'>
              {/* Top divider - only on small screens */}
              <div className='block lg:hidden border-t border-white/20 mb-6'></div>
              
              <FadeInText>
                <h4 className='text-xl font-bold mb-6 text-white/90'>
                  Our Services
                </h4>
              </FadeInText>

              <div className='space-y-3 text-white/80'>
                <ScaleInImage>
                  <div className='flex items-center justify-center space-x-2 py-2'>
                    <FaSeedling className='text-lg text-green-300' />
                    <span className='text-sm'>Farm Management</span>
                  </div>
                </ScaleInImage>

                <ScaleInImage delay={0.1}>
                  <div className='flex items-center justify-center space-x-2 py-2'>
                    <FaUsers className='text-lg text-blue-300' />
                    <span className='text-sm'>Labor Coordination</span>
                  </div>
                </ScaleInImage>

                <ScaleInImage delay={0.2}>
                  <div className='flex items-center justify-center space-x-2 py-2'>
                    <FaChartLine className='text-lg text-yellow-300' />
                    <span className='text-sm'>Crop Consulting</span>
                  </div>
                </ScaleInImage>

                <ScaleInImage delay={0.3}>
                  <div className='flex items-center justify-center space-x-2 py-2'>
                    <FaMobileAlt className='text-lg text-purple-300' />
                    <span className='text-sm'>Remote Monitoring</span>
                  </div>
                </ScaleInImage>
              </div>
              
              {/* Bottom divider - only on small screens */}
              <div className='block lg:hidden border-b border-white/20 mt-6'></div>
            </div>

            {/* Contact & Location */}
            <div className='text-center lg:text-right'>
              {/* Top divider - only on small screens */}
              <div className='block lg:hidden border-t border-white/20 mb-6'></div>
              
              <FadeInText>
                <h4 className='text-xl font-bold mb-6 text-white/90'>
                  Contact & Location
                </h4>
              </FadeInText>

              <div className='space-y-4 text-white/80'>
                <ScaleInImage>
                  <div className='flex items-center justify-center lg:justify-end space-x-3 py-2'>
                    <FaPhone className='text-lg text-blue-300' />
                    <a
                      href='tel:+918056555557'
                      className='hover:text-white hover:scale-105 transition-all duration-300'
                    >
                      +91 80565 55557
                    </a>
                  </div>
                </ScaleInImage>

                <ScaleInImage delay={0.2}>
                  <div className='flex items-start justify-center lg:justify-end space-x-3 py-2'>
                    <FaMapMarkerAlt className='text-lg mt-1 text-red-300' />
                    <div className='text-center lg:text-right max-w-xs'>
                      <p className='text-sm leading-relaxed'>
                        Aanakatti Seen kuli village,
                        <br />
                        Tholampalayam panchayat,
                        <br />
                        Coimbatore, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </ScaleInImage>
              </div>
              
              {/* Bottom divider - only on small screens */}
              <div className='block lg:hidden border-b border-white/20 mt-6'></div>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-white/20 mb-8'></div>

          {/* Bottom Section */}
          <div className='flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            {/* Copyright */}
            <FadeInText>
              <div className='text-center md:text-left'>
                <p className='text-white/80 text-sm md:text-base'>
                  © {currentYear} VivasayaThozhan. All rights reserved.
                </p>
                <p className='text-white/60 text-xs md:text-sm mt-1'>
                  Proudly serving Tamil Nadu farmers worldwide
                </p>
              </div>
            </FadeInText>

            {/* Design & Development Credit */}
            <ScaleInImage>
              <a
                href='https://ansaribrahim.me/'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-full py-3 px-6 border border-white/20 hover:border-white/40'
              >
                <div className='flex items-center space-x-2'>
                  <div className='w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                    <span className='text-white text-sm font-bold'>✨</span>
                  </div>
                  <div className='text-left'>
                    <p className='text-white font-medium text-sm group-hover:text-amber-200 transition-colors duration-300'>
                      Design & Development
                    </p>
                    <p className='text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300'>
                      Crafted with passion
                    </p>
                  </div>
                </div>
                <div className='text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-300'>
                  →
                </div>
              </a>
            </ScaleInImage>
          </div>

          {/* Final Inspirational Note */}
          <div className='mt-12 text-center'>
            <FadeInText>
              <div className='bg-white/5 backdrop-blur-sm rounded-2xl py-6 px-8 border border-white/10 max-w-2xl mx-auto'>
                <p className='text-white/70 text-sm md:text-base italic'>
                  "மண்ணின் மைந்தர்களே, நம் பாரம்பரியத்தை காப்போம்"
                </p>
                <p className='text-white/60 text-xs md:text-sm mt-2'>
                  "Sons of the soil, let's preserve our heritage"
                </p>
              </div>
            </FadeInText>
          </div>
        </div>
      </div>

      {/* Subtle Animation Elements */}
      <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-green-400 to-primary opacity-60'></div>
    </footer>
  );
};

export default Footer;
