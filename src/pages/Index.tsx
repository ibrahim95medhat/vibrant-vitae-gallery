
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
