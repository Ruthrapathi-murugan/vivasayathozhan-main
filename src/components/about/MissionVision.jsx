import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const MissionVision = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-earth/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Sacred Mission */}
        <ScaleInImage>
          <div className="bg-primary text-white rounded-3xl p-12 lg:p-16 mb-20 shadow-2xl">
            <FadeInText>
              <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
                Our Sacred Mission
              </h2>
            </FadeInText>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInText>
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed">
                    We exist to honor every farmer who rises before dawn, every 
                    laborer whose hands shape our fields, every woman who tends to 
                    livestock, and every person who contributes to the agricultural 
                    heartbeat of Tamil Nadu.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    This is their digital home—a space where their stories are told 
                    with respect, their struggles acknowledged, and their 
                    contributions celebrated.
                  </p>

                  <p className="text-xl leading-relaxed">
                    We bridge the gap between landowners and local farming expertise, 
                    creating opportunities that benefit everyone while preserving 
                    our agricultural heritage.
                  </p>
                </div>
              </FadeInText>

              <ScaleInImage>
                <div className="bg-white/20 rounded-2xl p-8 text-center">
                  <h3 className="text-3xl font-bold mb-6">தமிழ் விவசாய பெருமை</h3>
                  <div className="text-6xl mb-6">🌾</div>
                  <p className="text-xl leading-relaxed">
                    "The soil remembers every drop of sweat, every seed planted with 
                    hope, every harvest celebrated with gratitude."
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/30">
                    <p className="text-lg opacity-90">
                      From Coimbatore's fertile plains to Tamil Nadu's agricultural future
                    </p>
                  </div>
                </div>
              </ScaleInImage>
            </div>
          </div>
        </ScaleInImage>

        {/* Vision & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Our Vision */}
          <ScaleInImage>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <FadeInText>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700">
                  <p className="leading-relaxed">
                    To become Tamil Nadu's most trusted agricultural management platform, 
                    where every piece of land reaches its full potential and every farming 
                    community thrives with dignity.
                  </p>
                  
                  <p className="leading-relaxed">
                    We envision a future where technology enhances traditional farming 
                    wisdom, where distance doesn't disconnect landowners from their heritage, 
                    and where agricultural communities prosper through sustainable practices.
                  </p>
                </div>

                <div className="mt-8 bg-primary/10 rounded-2xl p-6 text-center">
                  <p className="font-bold text-primary text-lg">
                    "விவசாயம் வளர்ந்தால், தமிழகம் வளரும்"
                  </p>
                  <p className="text-gray-600 mt-2">
                    "When agriculture flourishes, Tamil Nadu flourishes"
                  </p>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>

          {/* Our Values */}
          <ScaleInImage>
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <FadeInText>
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-3xl font-bold text-primary">Our Values</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4 mt-1">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">Trust & Transparency</h4>
                      <p className="text-gray-700">Complete visibility in every aspect of farm management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4 mt-1">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">Sustainable Growth</h4>
                      <p className="text-gray-700">Practices that benefit the land, farmers, and future generations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4 mt-1">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">Excellence</h4>
                      <p className="text-gray-700">Striving for the highest standards in every service we provide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4 mt-1">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">Cultural Respect</h4>
                      <p className="text-gray-700">Honoring Tamil agricultural traditions and wisdom</p>
                    </div>
                  </div>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>
        </div>

        {/* Impact Statement */}
        <FadeInText>
          <div className="bg-gradient-to-r from-earth to-primary text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to Tamil Nadu
            </h3>
            
            <p className="text-xl lg:text-2xl leading-relaxed max-w-5xl mx-auto mb-8">
              From the Western Ghats to the Cauvery delta, from small family farms to 
              large agricultural estates, we are committed to serving every corner of 
              Tamil Nadu with the same dedication our ancestors showed to this sacred land.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-2xl p-6">
                <div className="text-4xl mb-3">🏡</div>
                <h4 className="font-bold text-lg mb-2">Local Roots</h4>
                <p className="text-white/90">Based in Coimbatore, serving all of Tamil Nadu</p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <div className="text-4xl mb-3">🌾</div>
                <h4 className="font-bold text-lg mb-2">Agricultural Heritage</h4>
                <p className="text-white/90">Preserving traditions while embracing innovation</p>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-lg mb-2">Future Ready</h4>
                <p className="text-white/90">Building tomorrow's agricultural ecosystem today</p>
              </div>
            </div>
          </div>
        </FadeInText>
      </div>
    </section>
  );
};

export default MissionVision;
