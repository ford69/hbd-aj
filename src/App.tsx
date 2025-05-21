import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import LanternSection from './components/LanternSection';
import LoveNoteSection from './components/LoveNoteSection';
import MemoryLaneSection from './components/MemoryLaneSection';
import SurpriseSection from './components/SurpriseSection';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const nextSection = () => {
    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    } else {
      // Reset to first section
      setCurrentSection(0);
    }
  };

  const previousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MusicPlayer isPlaying={musicPlaying} setIsPlaying={setMusicPlaying} />

      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all"
        >
          <span className="sr-only">
            {musicPlaying ? 'Pause Music' : 'Play Music'}
          </span>
          {musicPlaying ? '🔊' : '🔈'}
        </button>
      </div>

      <div className="relative h-screen">
        {currentSection === 0 && (
          <HeroSection onNext={nextSection} />
        )}
        
        {currentSection === 1 && (
          <LanternSection onNext={nextSection} onPrevious={previousSection} />
        )}
        
        {currentSection === 2 && (
          <LoveNoteSection onNext={nextSection} onPrevious={previousSection} />
        )}
        
        {currentSection === 3 && (
          <MemoryLaneSection onNext={nextSection} onPrevious={previousSection} />
        )}
        
        {currentSection === 4 && (
          <SurpriseSection onRestart={() => setCurrentSection(0)} onPrevious={previousSection} />
        )}
      </div>
    </div>
  );
}

export default App;