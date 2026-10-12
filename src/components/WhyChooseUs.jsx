import FadeInText from './Animation/FadeInText';
import ScaleInImage from './Animation/ScaleInImage';
import { NavLink } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <div className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-earth/5'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              Why Choose Us
            </h2>
          </FadeInText>

          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              We understand the unique challenges of NRI farmers and provide
              <span className='text-primary font-semibold'> trusted</span>,
              <span className='text-earth font-semibold'> reliable</span>, and
              <span className='text-green-600 font-semibold'>
                {' '}
                professional
              </span>{' '}
              agricultural services.
            </p>
          </FadeInText>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Card 1: Trusted Expertise */}
          <ScaleInImage>
            <div className='bg-white rounded-3xl p-10 shadow-2xl border border-primary/20 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden h-full flex flex-col'>
              {/* Background Pattern */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-300'></div>

              <FadeInText>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                    🎯
                  </div>
                  <h3 className='text-3xl font-bold text-primary mb-6'>
                    Trusted Expertise
                  </h3>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6 flex-grow'>
                    Over 10 years of experience managing Tamil Nadu farmlands
                    for NRI families. Our agricultural experts understand local
                    conditions and optimal farming practices.
                  </p>

                  <ul className='space-y-3 text-gray-600 mb-8'>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Certified agricultural consultants</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Local knowledge & expertise</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Proven track record</span>
                    </li>
                  </ul>

                  <div className='p-4 bg-primary/10 rounded-xl border border-primary/20 mt-auto'>
                    <div className='flex items-center justify-between'>
                      <span className='text-primary font-semibold'>
                        Success Rate
                      </span>
                      <span className='text-2xl font-bold text-primary'>
                        98%
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>

          {/* Card 2: 24/7 Monitoring */}
          <ScaleInImage>
            <div className='bg-white rounded-3xl p-10 shadow-2xl border border-earth/20 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden h-full flex flex-col'>
              {/* Background Pattern */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-earth/5 rounded-full -mr-16 -mt-16 group-hover:bg-earth/10 transition-colors duration-300'></div>

              <FadeInText>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                    📱
                  </div>
                  <h3 className='text-3xl font-bold text-earth mb-6'>
                    24/7 Monitoring
                  </h3>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6 flex-grow'>
                    Real-time updates and monitoring of your farmland through
                    our advanced digital platform. Stay connected with your land
                    from anywhere in the world.
                  </p>

                  <ul className='space-y-3 text-gray-600 mb-8'>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-earth rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Live field monitoring</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-earth rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Weekly detailed reports</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-earth rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Instant alerts & notifications</span>
                    </li>
                  </ul>

                  <div className='p-4 bg-earth/10 rounded-xl border border-earth/20 mt-auto'>
                    <div className='flex items-center justify-between'>
                      <span className='text-earth font-semibold'>
                        Response Time
                      </span>
                      <span className='text-2xl font-bold text-earth'>
                        &lt; 2hrs
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>

          {/* Card 3: Transparent Pricing */}
          <ScaleInImage>
            <div className='bg-white rounded-3xl p-10 shadow-2xl border border-green-600/20 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden h-full flex flex-col'>
              {/* Background Pattern */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-green-600/5 rounded-full -mr-16 -mt-16 group-hover:bg-green-600/10 transition-colors duration-300'></div>

              <FadeInText>
                <div className='relative z-10 flex flex-col h-full'>
                  <div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                    💰
                  </div>
                  <h3 className='text-3xl font-bold text-green-600 mb-6'>
                    Transparent Pricing
                  </h3>
                  <p className='text-lg text-gray-700 leading-relaxed mb-6 flex-grow'>
                    No hidden costs, no surprise fees. Our transparent pricing
                    model ensures you know exactly what you're paying for with
                    detailed breakdowns and competitive rates.
                  </p>

                  <ul className='space-y-3 text-gray-600 mb-8'>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Clear cost breakdown</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>Flexible payment options</span>
                    </li>
                    <li className='flex items-start'>
                      <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                      <span>No hidden charges</span>
                    </li>
                  </ul>

                  <div className='p-4 bg-green-50 rounded-xl border border-green-200 mt-auto'>
                    <div className='flex items-center justify-between'>
                      <span className='text-green-600 font-semibold'>
                        Cost Savings
                      </span>
                      <span className='text-2xl font-bold text-green-600'>
                        30%+
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <ScaleInImage>
            <div className='bg-gradient-to-r from-primary to-earth rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto'>
              <FadeInText>
                <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Ready to Trust Your Land with Us?
                </h3>
                <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                  Join hundreds of satisfied NRI farmers who trust us with their
                  precious farmland.
                </p>
                <NavLink
                  to='/contact'
                  className='bg-white text-primary px-12 py-4 rounded-2xl font-bold text-sm md:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg'
                >
                  Get Started Today
                </NavLink>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
