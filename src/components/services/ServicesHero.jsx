import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const ServicesHero = () => {
  return (
    <section className='relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-earth/10 overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 text-8xl text-primary'>🌾</div>
        <div className='absolute top-40 right-20 text-6xl text-earth'>🚜</div>
        <div className='absolute bottom-20 left-20 text-7xl text-green-600'>🌱</div>
        <div className='absolute bottom-10 right-10 text-5xl text-yellow-500'>☀️</div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Main Hero Content */}
        <div className='text-center mb-16'>
          <FadeInText>
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-6'>
              விவசாய சேவைகள்
            </h1>
          </FadeInText>
          
          <FadeInText>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-8'>
              Agricultural Services
            </h2>
          </FadeInText>
          
          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12'>
              Comprehensive farm management solutions for 
              <span className='text-primary font-semibold'> NRI farmers</span> and 
              <span className='text-earth font-semibold'> absentee landowners</span>. 
              Professional care for your land while you focus on your career abroad.
            </p>
          </FadeInText>
        </div>

        {/* Key Stats */}
        <ScaleInImage>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16'>
            {[
              { number: '500+', label: 'NRI Clients', icon: '👨‍🌾' },
              { number: '2000+', label: 'Acres Managed', icon: '🌾' },
              { number: '15+', label: 'Years Experience', icon: '🏆' },
              { number: '98%', label: 'Success Rate', icon: '📈' }
            ].map((stat, index) => (
              <FadeInText key={index}>
                <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300'>
                  <div className='text-4xl mb-3'>{stat.icon}</div>
                  <div className='text-2xl md:text-3xl font-bold text-primary mb-1'>{stat.number}</div>
                  <div className='text-gray-600 font-medium text-sm md:text-base'>{stat.label}</div>
                </div>
              </FadeInText>
            ))}
          </div>
        </ScaleInImage>

        {/* Value Proposition */}
        <ScaleInImage>
          <div className='bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-5xl mx-auto'>
            <FadeInText>
              <div className='text-center'>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                  Why Choose VivasayaThozhan?
                </h3>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed mb-8'>
                  We understand the emotional connection between NRI families and their ancestral farmland. 
                  Our professional team treats your land with the same care and respect as our own family property.
                </p>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                  <div className='text-center'>
                    <div className='text-3xl mb-3'>🛡️</div>
                    <h4 className='font-bold text-primary mb-2'>Trusted Care</h4>
                    <p className='text-gray-600 text-sm'>Your land is safe in our experienced hands</p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl mb-3'>📱</div>
                    <h4 className='font-bold text-earth mb-2'>Digital Updates</h4>
                    <p className='text-gray-600 text-sm'>Real-time monitoring and regular reports</p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl mb-3'>💰</div>
                    <h4 className='font-bold text-green-600 mb-2'>Transparent Pricing</h4>
                    <p className='text-gray-600 text-sm'>No hidden costs, clear value proposition</p>
                  </div>
                </div>
              </div>
            </FadeInText>
          </div>
        </ScaleInImage>
      </div>
    </section>
  );
};

export default ServicesHero;
