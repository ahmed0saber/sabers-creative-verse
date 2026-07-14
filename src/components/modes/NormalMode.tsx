import HeroSection from './normal/HeroSection';
import JourneySection from './normal/JourneySection';
import SkillsSection from './normal/SkillsSection';
import ExperienceSection from './normal/ExperienceSection';
import EducationSection from './normal/EducationSection';
import CertificationsSection from './normal/CertificationsSection';
import ProjectsSection from './normal/ProjectsSection';
import YouTubeSection from './normal/YouTubeSection';
import ArticlesSection from './normal/ArticlesSection';
import ConnectSection from './normal/ConnectSection';
import FloatingNavigation from './normal/components/FloatingNavigation';
import Footer from '../layout/Footer';
import OpenSourceSection from './normal/OpenSourceSection';
import BuildYourOwnXSection from './normal/BuildYourOwnX';

const NormalMode = () => {
  return (
    <>
      <div className="pt-16"> {/* Account for fixed navbar */}
        <HeroSection />
        <JourneySection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <OpenSourceSection />
        <BuildYourOwnXSection />
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