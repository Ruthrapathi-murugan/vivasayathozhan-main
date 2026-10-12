import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';
import {
  FaMobileAlt,
  FaShieldAlt,
  FaCamera,
  FaChartBar,
  FaBell,
  FaCloud,
} from 'react-icons/fa';

const TechnologySection = () => {
  const techFeatures = [
    {
      id: 1,
      icon: <FaMobileAlt className='w-8 h-8' />,
      title: 'Mobile App Access',
      tamil: 'மொபைல் ஆப் அணுகல்',
      description:
        'Monitor your farm 24/7 with our user-friendly mobile application. Get real-time updates wherever you are.',
      benefits: [
        'iOS & Android support',
        'Real-time notifications',
        'Photo gallery access',
        'Direct communication',
      ],
    },
    {
      id: 2,
      icon: <FaCamera className='w-8 h-8' />,
      title: 'Live Field Monitoring',
      tamil: 'நேரடி வயல் கண்காணிப்பு',
      description:
        'High-quality cameras and regular photo updates keep you connected to your land every single day.',
      benefits: [
        'Daily photo reports',
        'Time-stamped documentation',
        'Weather condition tracking',
        'Growth progress monitoring',
      ],
    },
    {
      id: 3,
      icon: <FaChartBar className='w-8 h-8' />,
      title: 'Analytics & Reports',
      tamil: 'பகுப்பாய்வு & அறிக்கைகள்',
      description:
        'Detailed analytics and comprehensive reports help you make informed decisions about your farm.',
      benefits: [
        'Yield prediction analysis',
        'Cost-benefit tracking',
        'Performance metrics',
        'ROI calculations',
      ],
    },
    {
      id: 4,
      icon: <FaShieldAlt className='w-8 h-8' />,
      title: 'Farm Protection Fence',
      tamil: 'வேலி பாதுகாப்பு',
      description:
        'Advanced fencing systems to protect your crops from wild animals and unauthorized entry, ensuring your farm stays secure.',
      benefits: [
        'Wild animal protection',
        'Crop damage prevention',
        'Perimeter security',
        'Durable construction',
      ],
    },
    {
      id: 5,
      icon: <FaBell className='w-8 h-8' />,
      title: 'Smart Alerts',
      tamil: 'ஸ்மார்ட் எச்சரிக்கைகள்',
      description:
        'Instant notifications for important events, weather changes, and maintenance requirements.',
      benefits: [
        'Weather alerts',
        'Maintenance reminders',
        'Harvest notifications',
        'Emergency alerts',
      ],
    },
    {
      id: 6,
      icon: <FaCloud className='w-8 h-8' />,
      title: 'Cloud Storage',
      tamil: 'கிளவுட் சேமிப்பு',
      description:
        'Secure cloud storage for all your farm data, photos, and reports with easy access and backup.',
      benefits: [
        'Secure data backup',
        'Easy access from anywhere',
        'Historical data tracking',
        'Multi-device sync',
      ],
    },
  ];

  return (
    <section className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              Technology & Innovation
            </h2>
          </FadeInText>

          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              Cutting-edge technology meets traditional farming wisdom. Stay
              connected to your land with
              <span className='text-primary font-semibold'>
                {' '}
                digital monitoring
              </span>{' '}
              and
              <span className='text-earth font-semibold'> smart analytics</span>
              .
            </p>
          </FadeInText>
        </div>

        {/* Main Technology Showcase */}
        <ScaleInImage>
          <div className='bg-gradient-to-r from-primary/10 to-earth/10 rounded-3xl p-12 mb-16 text-center'>
            <FadeInText>
              <h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                Farm Management at Your Fingertips
              </h3>
              <p className='text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto'>
                Our comprehensive digital platform brings your farm to your
                smartphone. Monitor, analyze, and manage your agricultural
                operations from anywhere in the world with unprecedented
                transparency.
              </p>

              {/* Demo Preview */}
              <div className='bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                  <div className='text-center'>
                    <div className='text-3xl mb-2'>📱</div>
                    <p className='text-sm font-medium text-gray-600'>
                      Mobile App
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl mb-2'>📸</div>
                    <p className='text-sm font-medium text-gray-600'>
                      Daily Photos
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl mb-2'>📊</div>
                    <p className='text-sm font-medium text-gray-600'>
                      Analytics
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl mb-2'>🔔</div>
                    <p className='text-sm font-medium text-gray-600'>Alerts</p>
                  </div>
                </div>
              </div>
            </FadeInText>
          </div>
        </ScaleInImage>

        {/* Technology Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {techFeatures.map((feature, index) => (
            <ScaleInImage key={feature.id}>
              <div className='bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group h-full flex flex-col'>
                {/* Icon Header */}
                <div className='flex items-center mb-6'>
                  <div className='p-4 bg-blue-100 rounded-2xl mr-4 group-hover:bg-blue-200 transition-colors duration-300'>
                    <div className='text-blue-600'>{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-gray-500 font-medium'>
                      {feature.tamil}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <FadeInText>
                  <p className='text-gray-700 leading-relaxed mb-6 flex-grow'>
                    {feature.description}
                  </p>
                </FadeInText>

                {/* Benefits List */}
                <div className='space-y-3'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className='flex items-center'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                      <span className='text-gray-600 text-sm'>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleInImage>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TechnologySection;
