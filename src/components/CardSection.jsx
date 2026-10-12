import { NavLink } from 'react-router-dom';
import assets from '../assets/index.js';
import FadeInText from './Animation/FadeInText.jsx';
import ScaleInImage from './Animation/ScaleInImage.jsx';

const CardSection = () => {
  const cardData = [
    {
      id: 1,
      title: 'Labour Requirements',
      description:
        'Professional agricultural workforce management for your land. We provide skilled farm workers, supervisors, and technical specialists to handle all farming operations while you are away. Complete staffing solutions with reliable personnel.',
      image: assets.labourCard,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 animate-pulse'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 7H16c-.8 0-1.54.37-2 1l-3 4v2h3v8h6zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-2c-.8 0-1.54.37-2 1l-3 4v2h3v8h6v-8h.5l3-4c.46-.63 1.2-1 2-1z' />
          </svg>
          <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping'></div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Waste Land Rebuild as Farm House',
      description:
        'Transform your unused or barren land into productive agricultural property. Complete land development services including soil preparation, irrigation setup, and farm infrastructure construction for NRI landowners.',
      image: assets.wasteland,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 transform transition-transform duration-300 hover:rotate-12'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7L18.5 9H17v8h-3v-6H10v6H7V9H5.5L12 5.7z' />
            <path d='M9 21v-2h6v2H9z' opacity='0.5' />
          </svg>
          <div className='absolute -bottom-1 -right-1'>
            <svg
              className='w-3 h-3 text-yellow-500 animate-bounce'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M9 11H7l5-7 5 7h-2v9H9v-9z' />
            </svg>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Cow and Goat Maintain',
      description:
        'Complete livestock management services for your farm animals. We handle feeding schedules, veterinary care, breeding programs, and shelter maintenance. Ideal for landowners who want livestock income without daily involvement.',
      image: assets.cowAndGoat,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 animate-pulse'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M20.5 6c-.28 0-.5.22-.5.5V8c0 1.1-.9 2-2 2s-2-.9-2-2V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V8c0 1.1-.9 2-2 2s-2-.9-2-2V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V8c0 1.1-.9 2-2 2s-2-.9-2-2V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V8c0 1.1-.9 2-2 2s-2-.9-2-2V6.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V8c0 2.21 1.79 4 4 4s4-1.79 4-4 1.79-4 4-4 4 1.79 4 4-.22.5-.5.5z M12 14c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z' />
          </svg>
          <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-ping'></div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Farm Build',
      description:
        'Professional farm construction and infrastructure development services. We build storage facilities, worker quarters, irrigation systems, and modern farming structures. Complete project management from planning to completion.',
      image: assets.farmhouse,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 transform transition-transform duration-300 hover:scale-110'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M22 9L12 2 2 9h3v13h6v-6h2v6h6V9h3zM12 4.14L19.5 9H17v11h-2v-6H9v6H7V9H4.5L12 4.14z' />
            <rect
              x='10'
              y='11'
              width='4'
              height='2'
              fill='currentColor'
              opacity='0.7'
            />
            <rect
              x='14'
              y='14'
              width='2'
              height='2'
              fill='currentColor'
              opacity='0.5'
            />
          </svg>
          <div className='absolute -bottom-1 -left-1'>
            <div className='w-2 h-2 bg-yellow-400 rounded-full animate-ping'></div>
          </div>
          <div className='absolute -top-1 -right-1'>
            <div
              className='w-2 h-2 bg-blue-400 rounded-full animate-ping'
              style={{ animationDelay: '0.5s' }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: 'Tree & Land Maintenance',
      description:
        'Comprehensive land and vegetation care services including tree pruning, pest control, soil health management, and crop cultivation. We maintain your agricultural land productivity while you focus on your career abroad.',
      image: assets.treeandlandmaintain,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 transform transition-transform duration-300 hover:scale-105'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z' />
            <circle cx='12' cy='8' r='2' fill='currentColor' opacity='0.6' />
            <circle cx='16' cy='6' r='1.5' fill='currentColor' opacity='0.4' />
          </svg>
          <div className='absolute -top-1 -right-1 w-3 h-3'>
            <div className='w-full h-full bg-green-400 rounded-full animate-pulse'></div>
          </div>
          <div className='absolute -bottom-1 -left-1 w-2 h-2'>
            <div
              className='w-full h-full bg-green-300 rounded-full animate-pulse'
              style={{ animationDelay: '0.3s' }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: 'Our Soil. Our Pride.',
      description:
        'We understand the emotional connection between landowners and their ancestral property. Our commitment goes beyond business - we treat your land with the same care and respect as our own family land.',
      image: assets.soilandpride,
      icon: (
        <div className='relative'>
          <svg
            className='w-8 h-8 animate-pulse text-amber-600'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L13.09 8.26L22 9L16 14L18 22L12 18L6 22L8 14L2 9L10.91 8.26L12 2Z' />
            <circle cx='12' cy='12' r='3' fill='currentColor' opacity='0.7' />
          </svg>
          <div className='absolute -top-1 -right-1'>
            <div className='w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin'></div>
          </div>
          <div className='absolute -bottom-1 -left-1'>
            <div className='w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce'></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className='py-16 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <FadeInText>
            <h2 className='text-4xl font-heading font-bold text-gray-900 mb-4'>
              Our <span className='text-green-600'>Services</span>
            </h2>
          </FadeInText>
          <FadeInText>
            <p className='text-xl font-sans text-gray-600 max-w-3xl mx-auto'>
              Comprehensive agricultural solutions designed to empower farmers
              and enhance productivity
            </p>
          </FadeInText>
          <div className='mt-8 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full'></div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cardData.map(card => (
            <ScaleInImage key={card.id}>
              <div className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100'>
                {/* Card Image */}
                <div className='relative h-48 overflow-hidden'>
                  <ScaleInImage>
                    <img
                      src={card.image}
                      alt={card.title}
                      className='w-full h-full transition-transform duration-300 group-hover:scale-110'
                    />
                  </ScaleInImage>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>

                  {/* Icon Overlay */}
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-green-600 shadow-lg'>
                    {card.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className='p-6'>
                  <FadeInText>
                    <h3 className='text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300'>
                      {card.title}
                    </h3>
                  </FadeInText>
                  <FadeInText>
                    <p className='font-sans text-gray-600 text-sm leading-relaxed mb-4'>
                      {card.description}
                    </p>
                  </FadeInText>

                  {/* Learn More Button */}
                  <FadeInText>
                    <div className='flex items-center font-sans text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors duration-300'>
                      <span>Learn More</span>
                      <svg
                        className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </FadeInText>
                </div>

                {/* Bottom Accent */}
                <div className='h-1 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </div>
            </ScaleInImage>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <ScaleInImage>
            <div className='inline-flex items-center space-x-4 bg-white px-4 py-4 rounded-2xl shadow-lg border border-gray-100'>
              <div className='text-green-600'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <FadeInText>
                <span className='font-sans text-gray-700 font-medium text-xs'>
                  Ready to transform your farming experience?
                </span>
              </FadeInText>
              <NavLink 
                to="/contact"
                className='font-sans bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs inline-block'
              >
                Get Started
              </NavLink>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
