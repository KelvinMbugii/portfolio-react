import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;