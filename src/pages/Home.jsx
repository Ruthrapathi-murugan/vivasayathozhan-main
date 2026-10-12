import FadeInText from '../components/Animation/FadeInText';
import ScaleInImage from '../components/Animation/ScaleInImage';
import assets from '../assets';
import CardSection from '../components/CardSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientSuccessStories from '../components/ClientSuccessStories';


const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-amber-50 via-primary-light to-green-50'>
      {/* Hero Section - Clean and Elegant */}
      <div className='h-auto py-56 md:py-72 lg:py-48 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative'>
        {/* Decorative Icons - Responsive Grid */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='grid grid-cols-2 h-full w-full p-4'>
            {/* Top Row */}
            <div className='flex justify-start items-start'>
              <ScaleInImage>
                <div className='text-6xl opacity-20 animate-pulse pt-20'>
                  🌾
                </div>
              </ScaleInImage>
            </div>
            <div className='flex justify-end items-start'>
              <ScaleInImage>
                <div className='text-6xl opacity-20 animate-pulse pt-20'>
                  🚜
                </div>
              </ScaleInImage>
            </div>

            {/* Bottom Row */}
            <div className='flex justify-start items-end'>
              <ScaleInImage>
                <div className='text-6xl opacity-20 animate-pulse pb-4'>🌱</div>
              </ScaleInImage>
            </div>
            <div className='flex justify-end items-end'>
              <ScaleInImage>
                <div className='text-6xl opacity-20 animate-pulse'>☀️</div>
              </ScaleInImage>
            </div>
          </div>
        </div>

        <div className='text-center max-w-5xl mx-auto relative z-10'>
          {/* Main Title - Tamil */}
          <FadeInText>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary mb-3 sm:mb-4 md:mb-6 font-tamil leading-tight'>
              விவசாய தோழன்
            </h1>
          </FadeInText>

          {/* Subtitle - English */}
          <FadeInText>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-earth mb-8 sm:mb-10 md:mb-12 font-english'>
              VivasayaThozhan
            </h2>
          </FadeInText>

          {/* Elegant Tagline */}
          <ScaleInImage>
            <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-primary/20 max-w-4xl mx-auto'>
              <p className='text-2xl md:text-3xl font-medium text-primary mb-4 font-english'>
                Pride of our soil. Voice of our people.
              </p>
              <p className='text-xl md:text-2xl text-soil font-tamil'>
                மண்ணின் பெருமை. மக்களின் குரல்.
              </p>
            </div>
          </ScaleInImage>
        </div>
      </div>

      {/* Banner here */}
      <ScaleInImage className='px-4'>
        <img
          src={assets.banner}
          alt='VivasayaThozhan Banner'
          className='w-full h-[25vh] lg:h-full rounded-3xl shadow-lg mt-24'
        />
      </ScaleInImage>

      {/* Card Section */}
      <CardSection />

      {/* Content Cards Section */}
      <div className='py-20 px-4 sm:px-6 lg:px-8 bg-white/50 mt-32'>
        <div className='max-w-7xl mx-auto'>
          <ScaleInImage>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <ScaleInImage className='bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10'>
                <div className='text-5xl mb-4'>🌾</div>
                <h3 className='text-2xl font-bold text-primary mb-4 font-tamil'>
                  உழவர்கள்
                </h3>
                <p className='text-gray-700 font-english leading-relaxed'>
                  Celebrating the farmers who feed our nation
                </p>
              </ScaleInImage>

              <ScaleInImage className='bg-gradient-to-br from-earth/5 to-earth/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-earth/10'>
                <div className='text-5xl mb-4'>💪</div>
                <h3 className='text-2xl font-bold text-earth mb-4 font-tamil'>
                  தொழிலாளர்கள்
                </h3>
                <p className='text-gray-700 font-english leading-relaxed'>
                  Honoring the laborers who build our foundation
                </p>
              </ScaleInImage>

              <ScaleInImage className='bg-gradient-to-br from-green-600/5 to-green-600/10 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-600/10'>
                <div className='text-5xl mb-4'>🏡</div>
                <h3 className='text-2xl font-bold text-green-700 mb-4 font-tamil'>
                  கிராமம்
                </h3>
                <p className='text-gray-700 font-english leading-relaxed'>
                  Preserving the essence of rural Tamil Nadu
                </p>
              </ScaleInImage>
            </div>
          </ScaleInImage>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className='relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        {/* Background Image Container */}
        <ScaleInImage>
          <div className='absolute inset-0 z-0'>
            <img 
              src={assets.vision}
              alt="Tamil Nadu Agricultural Vision" 
              className='w-full h-full object-cover object-center'
            />
            {/* Very light overlay - you can see the image clearly */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/20'></div>
          </div>
        </ScaleInImage>

        {/* Content Container */}
        <div className='relative z-20 max-w-7xl mx-auto'>
          
          {/* Vision Section */}
          <div className='text-center mb-20'>
            <FadeInText>
              <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
                Our Vision
              </h2>
            </FadeInText>
            
            <FadeInText>
              <div className='max-w-5xl mx-auto mb-12'>
                <p className='text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-700 font-medium'>
                  To create a digital ecosystem where every Tamil farmer and rural worker is 
                  <span className='text-primary font-semibold'> celebrated</span>, 
                  <span className='text-green-600 font-semibold'> respected</span>, and their stories are told with the 
                  <span className='text-earth font-semibold'> dignity they deserve</span>.
                </p>
              </div>
            </FadeInText>

            {/* Vision Values */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
              <ScaleInImage>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 hover:bg-white/95 transition-all duration-300 group shadow-xl'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>🌾</div>
                  <FadeInText>
                    <h4 className='text-xl font-bold text-primary mb-3'>Respect</h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Honoring the hands that feed our nation with respect and dignity
                    </p>
                  </FadeInText>
                </div>
              </ScaleInImage>

              <ScaleInImage>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-earth/20 hover:bg-white/95 transition-all duration-300 group shadow-xl'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>🤝</div>
                  <FadeInText>
                    <h4 className='text-xl font-bold text-earth mb-3'>Unity</h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Building bridges between rural communities and modern opportunities
                    </p>
                  </FadeInText>
                </div>
              </ScaleInImage>

              <ScaleInImage>
                <div className='bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-green-600/20 hover:bg-white/95 transition-all duration-300 group shadow-xl'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>💚</div>
                  <FadeInText>
                    <h4 className='text-xl font-bold text-green-600 mb-3'>Pride</h4>
                    <p className='text-gray-700 leading-relaxed'>
                      Celebrating the heritage of Tamil Nadu's agricultural legacy
                    </p>
                  </FadeInText>
                </div>
              </ScaleInImage>
            </div>
          </div>

          {/* Mission Section */}
          <div className='text-center'>
            <FadeInText>
              <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800'>
                Our Mission
              </h2>
            </FadeInText>

            <ScaleInImage>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
                
                {/* Mission Statement */}
                <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-primary/30 shadow-2xl'>
                  <FadeInText>
                    <div className='text-5xl mb-6'>🎯</div>
                    <h3 className='text-2xl font-bold text-primary mb-6'>What We Do</h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                      We provide comprehensive agricultural services tailored for NRI farmers and absentee landowners, 
                      ensuring your Tamil Nadu farmland thrives while you're away.
                    </p>
                    <ul className='text-left text-gray-600 space-y-3'>
                      <li className='flex items-start'>
                        <span className='text-green-600 mr-2 text-xl'>✓</span>
                        Remote farm monitoring and management
                      </li>
                      <li className='flex items-start'>
                        <span className='text-green-600 mr-2 text-xl'>✓</span>
                        Skilled labor coordination and supervision
                      </li>
                      <li className='flex items-start'>
                        <span className='text-green-600 mr-2 text-xl'>✓</span>
                        Crop planning and agricultural consulting
                      </li>
                    </ul>
                  </FadeInText>
                </div>

                {/* Impact Goals */}
                <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-10 border border-earth/30 shadow-2xl'>
                  <FadeInText>
                    <div className='text-5xl mb-6'>🌱</div>
                    <h3 className='text-2xl font-bold text-earth mb-6'>Our Impact</h3>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                      Empowering rural communities while bridging the gap between traditional farming 
                      and modern agricultural practices.
                    </p>
                    <div className='text-left space-y-4'>
                      <div className='flex items-center justify-between bg-primary/10 rounded-lg p-3 border border-primary/20'>
                        <span className='text-gray-700 font-medium'>Farmers Supported</span>
                        <span className='text-primary font-bold text-xl'>500+</span>
                      </div>
                      <div className='flex items-center justify-between bg-green-50 rounded-lg p-3 border border-green-200'>
                        <span className='text-gray-700 font-medium'>Acres Managed</span>
                        <span className='text-green-600 font-bold text-xl'>2000+</span>
                      </div>
                      <div className='flex items-center justify-between bg-earth/10 rounded-lg p-3 border border-earth/20'>
                        <span className='text-gray-700 font-medium'>NRI Families Served</span>
                        <span className='text-earth font-bold text-xl'>150+</span>
                      </div>
                    </div>
                  </FadeInText>
                </div>
              </div>
            </ScaleInImage>

            {/* Inspirational Quote */}
            <ScaleInImage>
              <div className='mt-16'>
                <div className='bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-primary/30 max-w-4xl mx-auto shadow-2xl'>
                  <FadeInText>
                    <div className='text-6xl mb-6 opacity-30 text-primary'>"</div>
                    <p className='text-2xl md:text-3xl font-medium text-gray-700 italic leading-relaxed'>
                      Every grain of rice, every drop of sweat, every calloused hand tells a story of resilience and pride.
                    </p>
                  </FadeInText>
                </div>
              </div>
            </ScaleInImage>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Client Success Stories Section */}
      <ClientSuccessStories />
    </div>
  );
};

export default Home;
