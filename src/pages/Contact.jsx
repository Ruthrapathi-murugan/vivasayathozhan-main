import React, { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheck, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import FadeInText from '../components/Animation/FadeInText';
import ScaleInImage from '../components/Animation/ScaleInImage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    storyType: 'share'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const formRef = useRef();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_lzghnhf';
  const EMAILJS_TEMPLATE_ID = 'template_53eiisl';
  const EMAILJS_PUBLIC_KEY = 'nhknq-OCdB_o_FXga';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Real EmailJS sending
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        story_type: formData.storyType,
        message: formData.message,
        to_email: 'vivasayathozhaan@gmail.com'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      
      // Reset form
      setFormData({ name: '', email: '', message: '', storyType: 'share' });
      setSubmitStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50 py-20 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeInText>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-6">இணையுங்கள்</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Join Our Movement</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Be part of something meaningful. Share your story, support our cause, or simply connect 
              with us as we build this celebration of Tamil agricultural heritage.
            </p>
          </div>
        </FadeInText>

        {/* Mission Statement */}
        <ScaleInImage>
          <div className="bg-primary text-white rounded-2xl p-12 mb-16 text-center shadow-2xl">
            <FadeInText>
              <h2 className="text-3xl font-bold mb-6">🤝 How You Can Be Part of This</h2>
            </FadeInText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScaleInImage>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">📖</div>
                  <h3 className="text-xl font-bold mb-3">Share Your Story</h3>
                  <p>Know a farmer or worker whose story deserves celebration? Tell us about them.</p>
                </div>
              </ScaleInImage>
              <ScaleInImage>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold mb-3">Contribute Content</h3>
                  <p>Help us capture authentic moments and genuine stories from rural communities.</p>
                </div>
              </ScaleInImage>
              <ScaleInImage>
                <div className="bg-white/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold mb-3">Support the Movement</h3>
                  <p>Join us in spreading awareness about the dignity and pride of our agricultural heroes.</p>
                </div>
              </ScaleInImage>
            </div>
          </div>
        </ScaleInImage>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <ScaleInImage>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <FadeInText>
                <h2 className="text-2xl font-semibold text-primary mb-6">Connect With Us</h2>
              </FadeInText>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <FiCheck className="text-green-600 text-xl mr-3" />
                <div>
                  <p className="text-green-800 font-semibold">வணக்கம்! Message sent successfully!</p>
                  <p className="text-green-600 text-sm">We'll get back to you within 24 hours to discuss your involvement.</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <FiX className="text-red-600 text-xl mr-3" />
                <div>
                  <p className="text-red-800 font-semibold">Failed to send message</p>
                  <p className="text-red-600 text-sm">Please try again or contact us directly via WhatsApp.</p>
                </div>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="storyType" className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to contribute?
                </label>
                <select
                  id="storyType"
                  name="storyType"
                  value={formData.storyType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="share">Share a story/person to feature</option>
                  <option value="volunteer">Volunteer for the movement</option>
                  <option value="support">General support and encouragement</option>
                  <option value="collaborate">Collaboration opportunity</option>
                  <option value="media">Media and documentation help</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name / உங்கள் பெயர்
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message / உங்கள் செய்தி
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about the story you'd like to share, how you'd like to help, or any ideas you have for this movement..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md font-medium text-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-opacity-90'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending... / அனுப்புகிறது...
                  </div>
                ) : (
                  'Send Message / செய்தி அனுப்பு'
                )}
              </button>
            </form>
          </div>
        </ScaleInImage>

          {/* Contact Information & Movement Details */}
          <div className="space-y-8">
            
            <ScaleInImage>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <FadeInText>
                  <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
                </FadeInText>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">vivasayathozhaan@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 80565 55557</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/918056555557" className="text-gray-600 hover:text-green-600">+91 80565 55557</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Aanakatti Seen kuli village, Tholampalayam panchayat, Coimbatore, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/vivasayathozhaan/" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                      <FaInstagram className="text-primary text-xl" />
                    </a>
                    <a href="https://x.com/vivasayathozhn" target="_blank" rel="noopener noreferrer" className="bg-primary/10 p-3 rounded-lg hover:bg-primary/20 transition-colors">
                      <FaTwitter className="text-primary text-xl" />
                    </a>
                    <a href="https://wa.me/918056555557" target="_blank" rel="noopener noreferrer" className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-colors">
                      <FaWhatsapp className="text-green-600 text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </ScaleInImage>

            <FadeInText>
              <div className="bg-primary-light rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">🙏 நன்றி</h3>
                <p className="text-primary leading-relaxed mb-4">
                  Every message, every story shared, every person who joins this movement 
                  adds to the collective voice that celebrates our agricultural heritage.
                </p>
                <div className="bg-white/50 rounded-lg p-4">
                  <p className="text-primary font-medium text-center">
                    "Together, we make every farmer's story heard, every worker's dignity seen"
                  </p>
                </div>
              </div>
            </FadeInText>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
