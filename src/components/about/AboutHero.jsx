import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const AboutHero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-6">
              நம்முடைய கதை
            </h1>
          </FadeInText>
          
          <FadeInText>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
              Our Story
            </h2>
          </FadeInText>

          <FadeInText>
            <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Born in the fertile lands of <span className="text-primary font-semibold">Coimbatore</span>, 
              VivasayaThozhan is not just a platform—it's a <span className="text-earth font-semibold">movement</span> to 
              celebrate the dignity, pride, and unwavering spirit of Tamil farmers and rural laborers.
            </p>
          </FadeInText>
        </div>

        {/* Location & Heritage Showcase */}
        <ScaleInImage>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Story Content */}
              <div className="p-12 lg:p-16">
                <FadeInText>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    From Aanakatti to the World
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In the heart of <strong>Aanakatti Seen Kuli village</strong>, nestled within the 
                    Tholampalayam panchayat of Coimbatore district, a vision was born. Here, where 
                    the Western Ghats whisper ancient farming wisdom and the fertile soil tells 
                    stories of generations past, we began our journey.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This is where tradition meets innovation, where the hands that have worked 
                    these lands for centuries now embrace technology to preserve and enhance 
                    their agricultural heritage.
                  </p>

                  <div className="bg-primary/10 rounded-2xl p-6">
                    <p className="text-primary font-semibold text-lg text-center">
                      "மண்ணின் மைந்தர்களின் கதை, அவர்களது வேர்களில் இருந்து ஆரம்பிக்கிறது"
                    </p>
                    <p className="text-gray-600 text-center mt-2">
                      "The story of our soil's children begins from their roots"
                    </p>
                  </div>
                </FadeInText>
              </div>

              {/* Visual Elements */}
              <div className="bg-gradient-to-br from-primary/20 to-earth/20 p-12 lg:p-16 flex items-center justify-center">
                <FadeInText>
                  <div className="text-center">
                    <div className="text-8xl mb-6">🌾</div>
                    <h4 className="text-2xl font-bold text-primary mb-4">
                      Coimbatore District
                    </h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Tamil Nadu's Agricultural Hub
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="font-semibold text-primary">Aanakatti Seen Kuli Village</p>
                        <p className="text-sm text-gray-600">Our Roots</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="font-semibold text-primary">Tholampalayam Panchayat</p>
                        <p className="text-sm text-gray-600">Our Community</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="font-semibold text-primary">Western Ghats Region</p>
                        <p className="text-sm text-gray-600">Our Landscape</p>
                      </div>
                    </div>
                  </div>
                </FadeInText>
              </div>
            </div>
          </div>
        </ScaleInImage>

        {/* Core Values Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ScaleInImage>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3">Respect</h3>
              <p className="text-gray-700">
                Honoring every farmer's contribution with dignity and genuine appreciation
              </p>
            </div>
          </ScaleInImage>

          <ScaleInImage>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-primary mb-3">Heritage</h3>
              <p className="text-gray-700">
                Preserving Tamil agricultural wisdom while embracing modern innovation
              </p>
            </div>
          </ScaleInImage>

          <ScaleInImage>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-primary mb-3">Empowerment</h3>
              <p className="text-gray-700">
                Providing tools and opportunities for agricultural communities to thrive
              </p>
            </div>
          </ScaleInImage>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
