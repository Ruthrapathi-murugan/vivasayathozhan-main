import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';
import { FaCheck, FaStar, FaCrown } from 'react-icons/fa';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic Care',
      tamil: 'அடிப்படை பராமரிப்பு',
      price: '₹15,000',
      period: 'per acre/year',
      popular: false,
      description: 'Essential farm management for small landowners',
      features: [
        'Monthly farm visits',
        'Basic labor coordination',
        'Seasonal crop planning',
        'Monthly photo reports',
        'Basic maintenance',
        'Phone support',
        'Weather alerts',
        'Harvest assistance',
      ],
      color: 'from-green-400 to-green-600',
    },
    {
      id: 2,
      name: 'Professional',
      tamil: 'தொழில்முறை',
      price: '₹25,000',
      period: 'per acre/year',
      popular: true,
      description: 'Comprehensive management for serious farmers',
      features: [
        'Weekly farm visits',
        'Expert labor management',
        'Advanced crop consulting',
        'Weekly photo & video reports',
        'Complete maintenance',
        'Priority phone support',
        'IoT sensor monitoring',
        'Pest control management',
        'Soil testing & analysis',
        'Yield optimization',
        'Market price updates',
        'Storage facility access',
      ],
      color: 'from-primary to-earth',
    },
    {
      id: 3,
      name: 'Premium Plus',
      tamil: 'பிரீமியம் பிளஸ்',
      price: '₹40,000',
      period: 'per acre/year',
      popular: false,
      description: 'Complete farm transformation & premium care',
      features: [
        'Daily monitoring',
        'Dedicated farm manager',
        'Premium crop varieties',
        'Daily detailed reports',
        'Complete infrastructure',
        '24/7 support hotline',
        'Advanced IoT systems',
        'Organic certification help',
        'Advanced soil treatment',
        'Premium market access',
        'Export quality guidance',
        'Custom storage solutions',
        'Livestock integration',
        'Technology upgrades',
        'Annual strategy planning',
      ],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const addOns = [
    { service: 'Livestock Management', price: '₹8,000/year per 10 animals' },
    { service: 'Infrastructure Development', price: '₹2,00,000+ (varies)' },
    { service: 'Organic Certification', price: '₹15,000 one-time' },
    { service: 'Drip Irrigation Setup', price: '₹50,000 per acre' },
    { service: 'Solar Power Installation', price: '₹1,50,000+ (varies)' },
    { service: 'Cold Storage Access', price: '₹500 per quintal/month' },
  ];

  return (
    <section className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              Transparent Pricing
            </h2>
          </FadeInText>

          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              No hidden costs, no surprise fees. Choose the plan that fits your
              needs with
              <span className='text-primary font-semibold'>
                {' '}
                transparent pricing
              </span>{' '}
              and
              <span className='text-earth font-semibold'>
                {' '}
                flexible options
              </span>
              .
            </p>
          </FadeInText>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>
          {pricingPlans.map((plan, index) => (
            <ScaleInImage key={plan.id}>
              <div
                className={`relative bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${plan.popular ? 'border-primary scale-105 lg:scale-110' : 'border-gray-200'}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <div className='bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center'>
                      <FaStar className='mr-2' />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className='p-8'>
                  {/* Plan Header */}
                  <div className='text-center mb-8'>
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                    >
                      <FaCrown className='text-white text-2xl' />
                    </div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                      {plan.name}
                    </h3>
                    <p className='text-primary font-medium mb-4'>
                      {plan.tamil}
                    </p>
                    <p className='text-gray-600 mb-6'>{plan.description}</p>

                    <div className='text-center'>
                      <span className='text-4xl font-bold text-gray-800'>
                        {plan.price}
                      </span>
                      <span className='text-gray-600 text-sm block'>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className='space-y-4 mb-8'>
                    {plan.features.map((feature, featureIndex) => (
                      <FadeInText key={featureIndex}>
                        <div className='flex items-center'>
                          <FaCheck className='text-green-500 mr-3 flex-shrink-0' />
                          <span className='text-gray-700 text-sm'>
                            {feature}
                          </span>
                        </div>
                      </FadeInText>
                    ))}
                  </div>
                </div>
              </div>
            </ScaleInImage>
          ))}
        </div>

        {/* Add-on Services */}
        <ScaleInImage>
          <div className='bg-white rounded-3xl p-12 shadow-lg border border-gray-100'>
            <FadeInText>
              <h3 className='text-3xl font-bold text-gray-800 text-center mb-8'>
                Additional Services
              </h3>
              <p className='text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto'>
                Enhance your farm with our optional premium services and
                infrastructure upgrades.
              </p>
            </FadeInText>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {addOns.map((addon, index) => (
                <FadeInText key={index}>
                  <div className='flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300'>
                    <span className='font-medium text-gray-800'>
                      {addon.service}
                    </span>
                    <span className='font-bold text-primary'>
                      {addon.price}
                    </span>
                  </div>
                </FadeInText>
              ))}
            </div>
          </div>
        </ScaleInImage>

        {/* Value Guarantee */}
        <div className='text-center mt-16'>
          <ScaleInImage>
            <div className='bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-12 max-w-4xl mx-auto'>
              <FadeInText>
                <h3 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                  Our Value Guarantee
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                  <div className='text-center'>
                    <div className='text-4xl mb-4'>💰</div>
                    <h4 className='font-bold text-gray-800 mb-2'>
                      Cost Savings
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Save 30%+ compared to managing independently
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl mb-4'>📈</div>
                    <h4 className='font-bold text-gray-800 mb-2'>
                      Yield Increase
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Average 40% increase in productivity
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl mb-4'>🛡️</div>
                    <h4 className='font-bold text-gray-800 mb-2'>
                      Peace of Mind
                    </h4>
                    <p className='text-gray-600 text-sm'>
                      Professional care with full transparency
                    </p>
                  </div>
                </div>
                <p className='text-lg text-gray-700 mb-8'>
                  If you're not completely satisfied with our service in the
                  first 3 months, we'll refund your payment and help you
                  transition.
                </p>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
