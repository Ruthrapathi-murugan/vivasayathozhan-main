import React from 'react';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const FounderStory = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              The Journey Begins
            </h2>
          </FadeInText>
          
          <FadeInText>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every great movement starts with a simple observation, a moment of clarity, 
              and the courage to act upon it.
            </p>
          </FadeInText>
        </div>

        {/* Founder Story Content */}
        <ScaleInImage>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Story Text */}
              <div className="p-12 lg:p-16 order-2 lg:order-1">
                <FadeInText>
                  <h3 className="text-3xl font-bold text-primary mb-8">
                    From Observation to Action
                  </h3>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Growing up in the agricultural heartland of Tamil Nadu, I witnessed 
                      firsthand the challenges faced by NRI landowners and absentee farmers. 
                      Many had inherited precious agricultural land but found themselves 
                      disconnected from their roots due to career demands in distant cities 
                      and countries.
                    </p>
                    
                    <p>
                      I saw fertile lands lying unused, families losing touch with their 
                      agricultural heritage, and local farming communities struggling to 
                      find sustainable employment. The gap between land ownership and 
                      active farming was widening, creating problems for everyone involved.
                    </p>
                    
                    <p>
                      But I also saw an opportunity—a chance to bridge this gap using 
                      technology, trust, and traditional farming wisdom. What if we could 
                      create a platform that brings landowners and local agricultural 
                      experts together? What if technology could make farm management 
                      transparent and accessible from anywhere in the world?
                    </p>
                  </div>
                </FadeInText>
              </div>

              {/* Visual Content */}
              <div className="bg-gradient-to-br from-primary/10 to-earth/10 p-12 lg:p-16 order-1 lg:order-2 flex items-center">
                <FadeInText>
                  <div className="text-center w-full">
                    <div className="text-7xl mb-6">👨‍🌾</div>
                    
                    <h4 className="text-2xl font-bold text-primary mb-6">
                      Rooted in Coimbatore
                    </h4>
                    
                    <div className="bg-white/70 rounded-2xl p-6 mb-6">
                      <p className="text-lg font-semibold text-primary mb-2">
                        Our Foundation
                      </p>
                      <p className="text-gray-700">
                        Built on generations of agricultural knowledge from the 
                        fertile lands of Western Tamil Nadu
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-3xl mb-2">🌾</div>
                        <p className="font-semibold text-sm text-primary">Traditional Wisdom</p>
                      </div>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="text-3xl mb-2">💻</div>
                        <p className="font-semibold text-sm text-primary">Modern Technology</p>
                      </div>
                    </div>
                  </div>
                </FadeInText>
              </div>
            </div>
          </div>
        </ScaleInImage>

        {/* The Solution */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScaleInImage>
            <div className="bg-primary text-white rounded-3xl p-12">
              <FadeInText>
                <h3 className="text-3xl font-bold mb-6">The Solution We Built</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Trust & Transparency</h4>
                      <p className="text-blue-100">Real-time updates and complete visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Local Expertise</h4>
                      <p className="text-blue-100">Connecting with experienced local farmers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Digital Platform</h4>
                      <p className="text-blue-100">Manage your farm from anywhere in the world</p>
                    </div>
                  </div>
                </div>
              </FadeInText>
            </div>
          </ScaleInImage>

          <FadeInText>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                A Vision Becomes Reality
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, VivasayaThozhan stands as a testament to what's possible when 
                technology serves humanity. We've helped dozens of families reconnect 
                with their agricultural heritage while providing sustainable livelihoods 
                to local farming communities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform has transformed abandoned lands into thriving agricultural 
                ventures, created employment opportunities in rural areas, and preserved 
                traditional farming practices for future generations.
              </p>
              
              <div className="bg-earth/10 rounded-2xl p-6">
                <p className="text-xl font-bold text-primary text-center">
                  "விவசாயம் வெறும் தொழில் அல்ல, அது நமது பாரம்பரியம்"
                </p>
                <p className="text-gray-600 text-center mt-2">
                  "Agriculture is not just a profession, it is our heritage"
                </p>
              </div>
            </div>
          </FadeInText>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
