import React from 'react';
import AboutHero from '../components/about/AboutHero';
import FounderStory from '../components/about/FounderStory';
import MissionVision from '../components/about/MissionVision';
import CelebrationGrid from '../components/about/CelebrationGrid';
import JoinMovement from '../components/about/JoinMovement';

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-green-50 to-amber-50 mt-5'>
      <AboutHero />
      <FounderStory />
      <MissionVision />
      <CelebrationGrid />
      <JoinMovement />
    </div>
  );
};

export default About;
