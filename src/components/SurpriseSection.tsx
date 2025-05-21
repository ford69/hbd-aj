import React, { useEffect, useState } from 'react';
import Confetti from './Confetti';
import { Heart } from 'lucide-react';

interface SurpriseSectionProps {
  onRestart: () => void;
  onPrevious: () => void;
}

const SurpriseSection: React.FC<SurpriseSectionProps> = ({ onRestart, onPrevious }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
      setVisible(true);
    }, 500);
  }, []);

  return (
    <div className="surprise-gradient h-full w-full flex items-center justify-center overflow-hidden">
      {showConfetti && <Confetti />}
      
      <div className="text-center z-10 px-6 max-w-3xl mx-auto">
        <h1 
          className={`text-5xl md:text-7xl text-white drop-shadow-lg mb-10 ${visible ? 'fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          Happy Birthday, Love!
        </h1>
        
        <p 
          className={`text-xl md:text-2xl text-white/90 mb-12 ${visible ? 'slide-up' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          Here's to more laughter, more dreams, and Happiness. 💕
        </p>
        
        <div className={`flex justify-center gap-4 ${visible ? 'fade-in' : 'opacity-0'}`} style={{ transitionDelay: '1.5s' }}>
          <button 
            onClick={onPrevious}
            className="bg-white/30 backdrop-blur-sm text-white py-3 px-6 rounded-full hover:bg-white/50 transition-all nav-button"
          >
            Back
          </button>
          
          <button 
            onClick={onRestart}
            className="bg-pink-500/80 backdrop-blur-sm text-white py-3 px-6 rounded-full hover:bg-pink-600/80 transition-all flex items-center gap-2 nav-button"
          >
            <Heart size={20} className="animate-pulse" />
            Start Over
          </button>
        </div>
      </div>
      
      {/* Additional floating hearts in background */}
      <div className="absolute w-10 h-10 text-3xl floating-slow text-white/30 left-1/4 top-1/4">💖</div>
      <div className="absolute w-10 h-10 text-3xl floating text-white/30 right-1/4 top-1/3">💝</div>
      <div className="absolute w-10 h-10 text-3xl floating-fast text-white/30 left-1/3 bottom-1/4">💘</div>
      <div className="absolute w-10 h-10 text-3xl floating-slow text-white/30 right-1/3 bottom-1/3">💕</div>
    </div>
  );
};

export default SurpriseSection;