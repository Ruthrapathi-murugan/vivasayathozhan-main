import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const JoinMovement = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-earth/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Our Promise */}
        <ScaleInImage>
          <div className="bg-primary-light rounded-3xl p-12 lg:p-16 text-center mb-16">
            <FadeInText>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
                Our Sacred Promise
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <p className="text-xl lg:text-2xl text-primary leading-relaxed mb-8">
                  We promise to showcase the real faces, real stories, and real 
                  dignity of Tamil agricultural communities. No stereotypes, no 
                  pity—just genuine respect and celebration of the people who feed 
                  our state and preserve our traditions.
                </p>
                
                <div className="bg-white/70 rounded-2xl p-8">
                  <p className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    "இந்த மண்ணின் மைந்தர்களின் பெருமையை உலகம் அறியட்டும்"
                  </p>
                  <p className="text-xl text-gray-700">
                    "Let the world know the pride of our soil's children"
                  </p>
                </div>
              </div>
            </FadeInText>
          </div>
        </ScaleInImage>

        {/* Join Movement Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Movement CTA */}
          <FadeInText>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-primary">
                Join Our Movement
              </h3>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                This is just the beginning. We're building something beautiful, 
                something meaningful. Together, we're creating a future where 
                Tamil agriculture thrives with dignity, innovation, and prosperity.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-primary mb-6 text-center">
                  How You Can Be Part of This Story
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-primary">Landowners</h5>
                      <p className="text-gray-600">Transform your land into a thriving agricultural venture</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">👨‍🌾</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-primary">Local Farmers</h5>
                      <p className="text-gray-600">Share your expertise and earn sustainable income</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-primary/20 rounded-lg p-3 mr-4">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-primary">Supporters</h5>
                      <p className="text-gray-600">Help us spread the word about Tamil agricultural heritage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInText>

          {/* Contact Information */}
          <ScaleInImage>
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                Connect With Us
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-4 rounded-xl mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <a href="mailto:vivasayathozhaan@gmail.com" className="text-primary hover:text-earth transition-colors">
                      vivasayathozhaan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-4 rounded-xl mr-4">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <a href="tel:+918056555557" className="text-primary hover:text-earth transition-colors">
                      +91 80565 55557
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-4 rounded-xl mr-4">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a href="https://wa.me/918056555557" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      +91 80565 55557
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-4 rounded-xl mr-4 mt-1">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Visit Us</p>
                    <p className="text-gray-600 leading-relaxed">
                      Aanakatti Seen kuli village,<br />
                      Tholampalayam panchayat,<br />
                      Coimbatore, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-800 mb-4 text-center">Follow Our Journey</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/vivasayathozhaan/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors group">
                    <FaInstagram className="text-primary text-xl group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://x.com/vivasayathozhn" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors group">
                    <FaTwitter className="text-primary text-xl group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://wa.me/918056555557" target="_blank" rel="noopener noreferrer" className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition-colors group">
                    <FaWhatsapp className="text-green-600 text-xl group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/services" 
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors"
                >
                  Explore Our Services
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold text-center hover:bg-primary hover:text-white transition-all"
                >
                  Start Your Journey
                </NavLink>
              </div>
            </div>
          </ScaleInImage>
        </div>

        {/* Final Inspiration */}
        <FadeInText>
          <div className="bg-gradient-to-r from-earth to-primary text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Together, We Cultivate the Future
            </h3>
            
            <p className="text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
              Every seed we plant, every story we share, every connection we make 
              contributes to a legacy that will nourish Tamil Nadu for generations to come.
            </p>

            <div className="bg-white/20 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-2xl font-bold mb-2">
                "விதைத்தவன் விளைவிப்பான், கனவு கண்டவன் காண்பிப்பான்"
              </p>
              <p className="text-xl opacity-90">
                "He who sows will reap, he who dreams will achieve"
              </p>
            </div>
          </div>
        </FadeInText>
      </div>
    </section>
  );
};

export default JoinMovement;
