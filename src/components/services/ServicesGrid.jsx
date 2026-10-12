import { NavLink } from 'react-router-dom';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';
import { FaSeedling, FaUsers, FaDog, FaHome, FaLeaf, FaChartLine } from 'react-icons/fa';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      icon: <FaUsers className='w-8 h-8' />,
      title: 'Labour Management',
      tamil: 'தொழிலாளர் மேலாண்மை',
      description: 'Professional workforce coordination for all your farming needs. We provide skilled laborers, supervisors, and technical specialists.',
      features: [
        'Skilled farm workers',
        'Technical supervisors',
        'Seasonal labor coordination',
        'Quality control specialists'
      ],
      color: 'primary'
    },
    {
      id: 2,
      icon: <FaHome className='w-8 h-8' />,
      title: 'Farm Development',
      tamil: 'பண்ணை மேம்பாடு',
      description: 'Complete farm construction and infrastructure development from planning to completion.',
      features: [
        'Storage facilities construction',
        'Worker quarters building',
        'Irrigation system setup',
        'Modern farming structures'
      ],
      color: 'earth'
    },
    {
      id: 3,
      icon: <FaDog className='w-8 h-8' />,
      title: 'Livestock Care',
      tamil: 'கால்நடை பராமரிப்பு',
      description: 'Comprehensive livestock management including feeding, veterinary care, and breeding programs.',
      features: [
        'Daily feeding schedules',
        'Veterinary care coordination',
        'Breeding program management',
        'Shelter maintenance'
      ],
      color: 'green-600'
    },
    {
      id: 4,
      icon: <FaSeedling className='w-8 h-8' />,
      title: 'Land Transformation',
      tamil: 'நில மாற்றம்',
      description: 'Transform unused or barren land into productive agricultural property with modern techniques.',
      features: [
        'Soil preparation & testing',
        'Irrigation infrastructure',
        'Crop planning & consultation',
        'Sustainable farming practices'
      ],
      color: 'yellow-600'
    },
    {
      id: 5,
      icon: <FaLeaf className='w-8 h-8' />,
      title: 'Crop Maintenance',
      tamil: 'பயிர் பராமரிப்பு',
      description: 'Comprehensive crop care including pruning, pest control, and harvest management.',
      features: [
        'Tree pruning & care',
        'Pest control management',
        'Soil health monitoring',
        'Harvest coordination'
      ],
      color: 'blue-600'
    },
    {
      id: 6,
      icon: <FaChartLine className='w-8 h-8' />,
      title: 'Digital Monitoring',
      tamil: 'டிஜிட்டல் கண்காணிப்பு',
      description: 'Real-time farm monitoring with detailed reports and analytics for informed decision making.',
      features: [
        'Weekly photo reports',
        'Real-time monitoring',
        'Analytics & insights',
        'Mobile app access'
      ],
      color: 'purple-600'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'primary': 'text-primary border-primary/20 bg-primary/5 hover:bg-primary/10',
      'earth': 'text-earth border-earth/20 bg-earth/5 hover:bg-earth/10',
      'green-600': 'text-green-600 border-green-600/20 bg-green-50 hover:bg-green-100',
      'yellow-600': 'text-yellow-600 border-yellow-600/20 bg-yellow-50 hover:bg-yellow-100',
      'blue-600': 'text-blue-600 border-blue-600/20 bg-blue-50 hover:bg-blue-100',
      'purple-600': 'text-purple-600 border-purple-600/20 bg-purple-50 hover:bg-purple-100'
    };
    return colorMap[color] || colorMap['primary'];
  };

  return (
    <section className='py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-20'>
          <FadeInText>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
              Our Services
            </h2>
          </FadeInText>
          
          <FadeInText>
            <p className='text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              Comprehensive agricultural solutions designed to empower 
              <span className='text-primary font-semibold'> NRI farmers</span> and enhance 
              <span className='text-earth font-semibold'> productivity</span> from anywhere in the world.
            </p>
          </FadeInText>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ScaleInImage key={service.id}>
              <div className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 group h-full flex flex-col ${getColorClasses(service.color)}`}>
                
                {/* Icon Header */}
                <div className='flex items-center mb-6'>
                  <div className={`p-4 rounded-2xl mr-4 ${service.color === 'primary' ? 'bg-primary/10' : service.color === 'earth' ? 'bg-earth/10' : `bg-${service.color}/10`}`}>
                    <div className={`${service.color === 'primary' ? 'text-primary' : service.color === 'earth' ? 'text-earth' : `text-${service.color}`}`}>
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-sm text-gray-500 font-medium'>{service.tamil}</p>
                  </div>
                </div>

                {/* Description */}
                <FadeInText>
                  <p className='text-gray-700 leading-relaxed mb-6 flex-grow'>
                    {service.description}
                  </p>
                </FadeInText>

                {/* Features List */}
                <div className='space-y-3 mb-6'>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-center'>
                      <div className={`w-2 h-2 rounded-full mr-3 ${service.color === 'primary' ? 'bg-primary' : service.color === 'earth' ? 'bg-earth' : `bg-${service.color}`}`}></div>
                      <span className='text-gray-600 text-sm'>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </ScaleInImage>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-20'>
          <ScaleInImage>
            <div className='bg-gradient-to-r from-primary to-earth rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto'>
              <FadeInText>
                <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Ready to Transform Your Farming Experience?
                </h3>
                <p className='text-xl text-white/90 mb-8 leading-relaxed'>
                  Join hundreds of satisfied NRI farmers who trust us with their precious farmland.
                </p>
                <NavLink
                  to='/contact' className='bg-white text-primary px-12 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg'>
                  Get Started Today
                </NavLink>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
