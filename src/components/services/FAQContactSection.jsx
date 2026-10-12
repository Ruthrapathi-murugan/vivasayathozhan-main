import React, { useState, useRef } from 'react';
import { FiChevronDown, FiChevronUp, FiMail, FiPhone, FiMapPin, FiClock, FiCheck, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import FadeInText from '../Animation/FadeInText';
import ScaleInImage from '../Animation/ScaleInImage';

const FAQContactSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const formRef = useRef();

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_lzghnhf';
  const EMAILJS_TEMPLATE_ID = 'template_53eiisl';
  const EMAILJS_PUBLIC_KEY = 'nhknq-OCdB_o_FXga';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if EmailJS is fully configured
      if (EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {

        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        // Real EmailJS sending
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'vivasayathozhaan@gmail.com' // Your email
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
        
        console.log('✅ Email sent successfully via EmailJS!');
      }
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
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

  const faqs = [
    {
      question: "How do you ensure the quality of farm management?",
      answer: "We use advanced monitoring systems, regular field visits, soil testing, and work with certified local experts. Every activity is documented and reported to you with photos and detailed updates."
    },
    {
      question: "What happens if I'm not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy with our service, we'll work to resolve any issues immediately. We also provide transparent reporting so you can monitor progress at all times."
    },
    {
      question: "How often will I receive updates about my land?",
      answer: "You'll receive weekly progress reports with photos, monthly detailed analytics, and can access real-time updates through our digital platform. Emergency situations are communicated immediately."
    },
    {
      question: "Do you work with organic farming practices?",
      answer: "Yes! We specialize in sustainable and organic farming methods. We can help transition your land to organic certification and maintain eco-friendly practices throughout the farming process."
    },
    {
      question: "What areas do you currently serve?",
      answer: "We primarily serve Tamil Nadu with plans to expand to other South Indian states. Contact us to check if we serve your specific location or if we can arrange services in your area."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply contact us for a free consultation. We'll assess your land, discuss your goals, and create a customized management plan. You can start with any of our service packages."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Section */}
        <div className="mb-20">
          <FadeInText>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our agricultural services and land management solutions.
              </p>
            </div>
          </FadeInText>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <ScaleInImage key={index}>
                <div className="mb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left focus:outline-none focus:ring-4 focus:ring-primary/20"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      {activeAccordion === index ? (
                        <FiChevronUp className="text-primary text-xl flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="text-primary text-xl flex-shrink-0" />
                      )}
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </button>
                </div>
              </ScaleInImage>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <FadeInText>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect with us today to discuss your land management needs. Our team of experts is ready to help you maximize your agricultural potential.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email Us</p>
                    <p className="text-gray-600">vivasayathozhaan@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-gray-600">+91 80565 55557</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-gray-600">+91 80565 55557</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Aanakatti Seen kuli village, Tholampalayam panchayat, Coimbatore, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FiClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Business Hours</p>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
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
          </FadeInText>

          {/* Contact Form */}
          <ScaleInImage>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <FiCheck className="text-green-600 text-xl mr-3" />
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <FiX className="text-red-600 text-xl mr-3" />
                  <div>
                    <p className="text-red-800 font-semibold">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="+91 80565 55557"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="land-management">Complete Land Management</option>
                    <option value="crop-consultation">Crop Consultation</option>
                    <option value="soil-health">Soil Health Assessment</option>
                    <option value="irrigation">Irrigation Systems</option>
                    <option value="harvesting">Harvesting Services</option>
                    <option value="market-linkage">Market Linkage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Tell us about your land and what you're looking to achieve..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary text-white hover:bg-primary-dark'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </ScaleInImage>
        </div>

        {/* Emergency Contact Banner */}
        <FadeInText>
          <div className="mt-16 bg-primary text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg mb-6">
              For urgent land management issues or emergencies, contact our 24/7 support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918056555557"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <FiPhone className="mr-2" />
                Emergency Hotline
              </a>
              <a
                href="https://wa.me/918056555557"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </FadeInText>
      </div>
    </section>
  );
};

export default FAQContactSection;
