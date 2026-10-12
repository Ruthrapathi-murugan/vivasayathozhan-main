import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';
import { FaArrowRight } from 'react-icons/fa';

const ServiceProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Initial Consultation',
      tamil: 'ஆரம்ப ஆலோசனை',
      description:
        'Free consultation to understand your land, goals, and specific requirements. We assess your property and discuss your vision.',
      icon: '🤝',
      details: [
        'Land assessment & inspection',
        'Understanding your goals',
        'Soil testing & analysis',
        'Custom requirement gathering',
      ],
    },
    {
      id: 2,
      title: 'Customized Plan',
      tamil: 'தனிப்பயன் திட்டம்',
      description:
        "We create a detailed service plan tailored to your land's needs, your budget, and your long-term agricultural goals.",
      icon: '📋',
      details: [
        'Detailed service roadmap',
        'Budget planning & estimation',
        'Timeline development',
        'Resource allocation plan',
      ],
    },
    {
      id: 3,
      title: 'Implementation',
      tamil: 'செயல்படுத்தல்',
      description:
        'Our expert team begins executing the plan with professional precision, keeping you updated every step of the way.',
      icon: '⚡',
      details: [
        'Professional team deployment',
        'Quality control measures',
        'Regular progress updates',
        'Real-time communication',
      ],
    },
    {
      id: 4,
      title: 'Monitoring & Reports',
      tamil: 'கண்காணிப்பு & அறிக்கைகள்',
      description:
        'Continuous monitoring with detailed reports, photos, and analytics to keep you connected with your land.',
      icon: '📊',
      details: [
        'Weekly photo reports',
        'Monthly analytics review',
        'Performance metrics tracking',
        '24/7 support availability',
      ],
    },
  ];

  return (
    <section className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-earth/5'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              How We Work
            </h2>
          </FadeInText>

          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              Our proven 4-step process ensures
              <span className='text-primary font-semibold'>
                {' '}
                professional service delivery
              </span>{' '}
              and
              <span className='text-earth font-semibold'>
                {' '}
                exceptional results
              </span>{' '}
              for every client.
            </p>
          </FadeInText>
        </div>

        {/* Process Steps */}
        <div className='space-y-16'>
          {processSteps.map((step, index) => (
            <div key={step.id} className='relative'>
              {/* Connection Line - Not for last item */}
              {index < processSteps.length - 1 && (
                <div className='absolute left-1/2 transform -translate-x-1/2 top-full mt-8 hidden lg:block'>
                  <FaArrowRight className='text-primary text-3xl transform rotate-90' />
                </div>
              )}

              <ScaleInImage>
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Step Content */}
                  <div className='flex-1 max-w-2xl'>
                    <FadeInText>
                      <div className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300'>
                        {/* Step Number & Title */}
                        <div className='flex items-center mb-6'>
                          <div className='bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4'>
                            {step.id}
                          </div>
                          <div>
                            <h3 className='text-2xl font-bold text-gray-800'>
                              {step.title}
                            </h3>
                            <p className='text-primary font-medium'>
                              {step.tamil}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className='text-gray-700 leading-relaxed mb-6 text-lg'>
                          {step.description}
                        </p>

                        {/* Details List */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                          {step.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className='flex items-center'
                            >
                              <div className='w-2 h-2 bg-primary rounded-full mr-3'></div>
                              <span className='text-gray-600 text-sm'>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInText>
                  </div>

                  {/* Step Visual */}
                  <div className='flex-shrink-0'>
                    <div className='bg-gradient-to-br from-primary/10 to-earth/10 rounded-full w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center text-6xl lg:text-7xl shadow-lg'>
                      {step.icon}
                    </div>
                  </div>
                </div>
              </ScaleInImage>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-20'>
          <ScaleInImage>
            <div className='bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto'>
              <FadeInText>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                  Ready to Get Started?
                </h3>
                <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                  Schedule your free consultation today and take the first step
                  towards professional farm management.
                </p>
                
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
