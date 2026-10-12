import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ServiceProcess from '../components/services/ServiceProcess';
import TechnologySection from '../components/services/TechnologySection';
import PricingSection from '../components/services/PricingSection';
import FAQContactSection from '../components/services/FAQContactSection';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ServicesHero />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Service Process */}
      <ServiceProcess />
      
      {/* Technology & Innovation */}
      <TechnologySection />
      
      {/* Pricing & Packages */}
      <PricingSection />
      
      {/* FAQ & Contact */}
      <FAQContactSection />
    </div>
  );
};

export default Services;

