import HeroSection from './normal/HeroSection';
import SkillsSection from './normal/SkillsSection';
import ExperienceSection from './normal/ExperienceSection';
import EducationSection from './normal/EducationSection';
import ProjectsSection from './normal/ProjectsSection';
import YouTubeSection from './normal/YouTubeSection';
import ArticlesSection from './normal/ArticlesSection';
import ConnectSection from './normal/ConnectSection';
import FloatingNavigation from './normal/components/FloatingNavigation';
import Footer from '../layout/Footer';
import OpenSourceSection from './normal/OpenSourceSection';

const NormalMode = () => {
  return (
    <>
      <div className="pt-16"> {/* Account for fixed navbar */}
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <OpenSourceSection />
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