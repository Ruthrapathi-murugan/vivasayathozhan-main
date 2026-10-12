import FadeInText from './Animation/FadeInText';
import ScaleInImage from './Animation/ScaleInImage';
import { NavLink } from 'react-router-dom';

const ClientSuccessStories = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Coimbatore',
      occupation: 'Software Engineer, Singapore',
      image: '👨‍💼',
      rating: 5,
      testimonial:
        'VivasayaThozhan transformed my ancestral farmland into a profitable venture. Their transparent reporting and expert care gave me peace of mind while living abroad. My coconut farm now generates 40% more yield than before!',
      result: '40% Increase in Yield',
    },
    {
      id: 2,
      name: 'Priya Subramanian',
      location: 'Madurai',
      occupation: 'Doctor, USA',
      image: '👩‍⚕️',
      rating: 5,
      testimonial:
        "Being in the US, I was worried about my family's 5-acre farm. VivasayaThozhan's team manages everything professionally. Their weekly reports with photos keep me connected to my roots. Excellent service!",
      result: '100% Peace of Mind',
    },
    {
      id: 3,
      name: 'Anand Krishnan',
      location: 'Thanjavur',
      occupation: 'Business Owner, Dubai',
      image: '👨‍💼',
      rating: 5,
      testimonial:
        'From soil testing to harvest management, they handle everything. My rice fields are now more productive than ever. The digital monitoring system is fantastic - I can see my farm anytime!',
      result: '50% Cost Reduction',
    },
    {
      id: 4,
      name: 'Meera Natarajan',
      location: 'Salem',
      occupation: 'Engineer, Canada',
      image: '👩‍💻',
      rating: 5,
      testimonial:
        "VivasayaThozhan helped me convert my traditional farm to organic farming. The transition was smooth, and now I'm getting premium prices for organic produce. Their expertise is unmatched!",
      result: 'Organic Certification',
    },
    {
      id: 5,
      name: 'Suresh Venkatesh',
      location: 'Erode',
      occupation: 'Manager, Australia',
      image: '👨‍🔧',
      rating: 5,
      testimonial:
        'I inherited 10 acres but knew nothing about farming. VivasayaThozhan educated me and managed everything professionally. Now my turmeric farm is one of the most productive in the region!',
      result: '300% ROI Increase',
    },
    {
      id: 6,
      name: 'Kavitha Raman',
      location: 'Tirunelveli',
      occupation: 'Consultant, UK',
      image: '👩‍💼',
      rating: 5,
      testimonial:
        'Their drip irrigation setup and modern farming techniques doubled my mango harvest. The team is professional, honest, and truly cares about the land. Highly recommended for NRI farmers!',
      result: '2x Harvest Yield',
    },
  ];

  return (
    <div className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-white to-primary/5'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              Client Success Stories
            </h2>
          </FadeInText>

          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              Hear from our{' '}
              <span className='text-primary font-semibold'>
                satisfied NRI farmers
              </span>{' '}
              who trust us with their
              <span className='text-earth font-semibold'>
                {' '}
                ancestral lands
              </span>{' '}
              and have achieved
              <span className='text-green-600 font-semibold'>
                {' '}
                remarkable success
              </span>
              .
            </p>
          </FadeInText>
        </div>

        {/* Testimonials Carousel Container */}
        <div className='relative w-full overflow-hidden'>
          {/* Gradient Overlays for better visual effect */}
          <div className='absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'></div>

          {/* Manual Scroll Container */}
          <div
            className='overflow-x-auto scrollbar-hide pb-4'
            style={{
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
            }}
          >
            {/* Continuous Scrolling Container */}
            <div
              className='flex animate-scroll hover:[animation-play-state:paused] space-x-8 w-max'
              onMouseEnter={e => (e.target.style.animationPlayState = 'paused')}
              onMouseLeave={e =>
                (e.target.style.animationPlayState = 'running')
              }
              onTouchStart={e =>
                (e.currentTarget.style.animationPlayState = 'paused')
              }
              onTouchEnd={e =>
                (e.currentTarget.style.animationPlayState = 'running')
              }
            >
              {/* First Set of Cards */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`first-${testimonial.id}`}
                  className='flex-shrink-0 w-80 md:w-96 h-auto'
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <ScaleInImage>
                    <div className='bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden h-full'>
                      {/* Background Pattern */}
                      <div className='absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-300'></div>

                      <FadeInText>
                        <div className='relative z-10'>
                          {/* Header with Avatar and Info */}
                          <div className='flex items-center mb-6'>
                            <div className='text-5xl mr-4'>
                              {testimonial.image}
                            </div>
                            <div>
                              <h3 className='text-xl font-bold text-gray-800'>
                                {testimonial.name}
                              </h3>
                              <p className='text-sm text-gray-600'>
                                {testimonial.occupation}
                              </p>
                              <p className='text-sm text-primary font-medium'>
                                {testimonial.location}, Tamil Nadu
                              </p>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className='flex mb-6'>
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className='text-yellow-400 text-xl'>
                                ⭐
                              </span>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <p className='text-gray-700 leading-relaxed mb-6 text-sm italic'>
                            "{testimonial.testimonial}"
                          </p>

                          {/* Result Badge */}
                          <div className='bg-gradient-to-r from-primary/10 to-green-50 border border-primary/20 rounded-xl p-4'>
                            <div className='flex items-center justify-between'>
                              <span className='text-primary font-semibold text-sm'>
                                Result:
                              </span>
                              <span className='text-xs font-bold text-green-600'>
                                {testimonial.result}
                              </span>
                            </div>
                          </div>
                        </div>
                      </FadeInText>
                    </div>
                  </ScaleInImage>
                </div>
              ))}

              {/* Second Set (Duplicate for Seamless Loop) */}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`second-${testimonial.id}`}
                  className='flex-shrink-0 w-80 md:w-96 h-auto'
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className='bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl hover:scale-105 transition-all duration-300 group relative overflow-hidden h-full'>
                    {/* Background Pattern */}
                    <div className='absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-300'></div>

                    <div className='relative z-10'>
                      {/* Header with Avatar and Info */}
                      <div className='flex items-center mb-6'>
                        <div className='text-5xl mr-4'>{testimonial.image}</div>
                        <div>
                          <h3 className='text-xl font-bold text-gray-800'>
                            {testimonial.name}
                          </h3>
                          <p className='text-sm text-gray-600'>
                            {testimonial.occupation}
                          </p>
                          <p className='text-sm text-primary font-medium'>
                            {testimonial.location}, Tamil Nadu
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className='flex mb-6'>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className='text-yellow-400 text-xl'>
                            ⭐
                          </span>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className='text-gray-700 leading-relaxed mb-6 text-sm italic'>
                        "{testimonial.testimonial}"
                      </p>

                      {/* Result Badge */}
                      <div className='bg-gradient-to-r from-primary/10 to-green-50 border border-primary/20 rounded-xl p-4'>
                        <div className='flex items-center justify-between'>
                          <span className='text-primary font-semibold text-sm'>
                            Result:
                          </span>
                          <span className='text-lg font-bold text-green-600'>
                            {testimonial.result}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='mt-20'>
          <ScaleInImage>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {[
                { number: '500+', label: 'Happy NRI Farmers', icon: '👨‍🌾' },
                { number: '10,000+', label: 'Acres Managed', icon: '🌾' },
                { number: '98%', label: 'Success Rate', icon: '📈' },
                { number: '15+', label: 'Years Experience', icon: '🏆' },
              ].map((stat, index) => (
                <FadeInText key={index}>
                  <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center group hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                    <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                      {stat.icon}
                    </div>
                    <div className='text-3xl font-bold text-primary mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-gray-600 font-medium'>
                      {stat.label}
                    </div>
                  </div>
                </FadeInText>
              ))}
            </div>
          </ScaleInImage>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <ScaleInImage>
            <div className='bg-gradient-to-r from-green-600 to-primary rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto'>
              <FadeInText>
                <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Join Our Success Stories
                </h3>
                <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                  Be the next NRI farmer to achieve remarkable success with
                  VivasayaThozhan.
                </p>
                <NavLink
                  to='/contact'
                  className='bg-white text-xs text-primary px-5 py-4 rounded-2xl font-bold md:text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg'
                >
                  Start Your Success Story
                </NavLink>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>
      </div>

      {/* Custom CSS for enhanced scrolling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Manual scroll support */
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        }

        /* Ensure smooth interaction */
        @media (pointer: coarse) {
          .animate-scroll {
            animation-play-state: running;
          }
        }
      `}</style>
    </div>
  );
};

export default ClientSuccessStories;
