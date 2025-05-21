import React, { useEffect, useState } from 'react';
import FloatingHeart from './FloatingHeart';

interface HeroSectionProps {
  onNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNext }) => {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Delayed appearance of components
    setTimeout(() => setVisible(true), 500);
    setTimeout(() => setShowButton(true), 2500);
  }, []);

  // Generate random positions for hearts
  const heartPositions = Array.from({ length: 15 }, () => ({
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 6,
  }));

  return (
    <div className="hero-gradient h-full w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {heartPositions.map((pos, index) => (
          <FloatingHeart
            key={index} 
            style={{
              left: pos.left,
              top: pos.top,
              fontSize: `${pos.size}rem`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 px-6">
        <h1 
          className={`text-5xl md:text-7xl text-white drop-shadow-lg mb-8 ${visible ? 'fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          Happy Birthday, AJ!
        </h1>
        <p 
          className={`text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-12 ${visible ? 'fade-in' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          You're a beacon of joy and happiness ✨
        </p>
        {showButton && (
          <button 
            onClick={onNext}
            className="bg-white/30 backdrop-blur-sm text-white py-3 px-8 rounded-full hover:bg-white/50 transition-all nav-button slide-up"
          >
            Continue Your Journey ✨
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;