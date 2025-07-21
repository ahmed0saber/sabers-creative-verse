import React from 'react';
import HeroSection from './normal/HeroSection';
import SkillsSection from './normal/SkillsSection';
import ProjectsSection from './normal/ProjectsSection';
import YouTubeSection from './normal/YouTubeSection';
import ArticlesSection from './normal/ArticlesSection';
import ConnectSection from './normal/ConnectSection';
import FloatingNavigation from '../FloatingNavigation';
import Footer from '../Footer';

const NormalMode = () => {
  return (
    <>
      <div className="pt-16"> {/* Account for fixed navbar */}
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <YouTubeSection />
        <ArticlesSection />
        <ConnectSection />
        <Footer />
      </div>
      <FloatingNavigation />
    </>
  );
};

export default NormalMode;