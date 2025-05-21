import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import NavigationButtons from './NavigationButtons';

interface LanternSectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

const LanternSection: React.FC<LanternSectionProps> = ({ onNext, onPrevious }) => {
  const [lanternReleased, setLanternReleased] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const releaseLantern = () => {
    if (!lanternReleased) {
      setLanternReleased(true);
      setTimeout(() => setShowMessage(true), 1000);
      setTimeout(onNext, 5000); // Auto progress after 5 seconds
    }
  };

  // Star positions
  const starPositions = Array.from({ length: 30 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 0.4 + 0.1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="night-sky h-full w-full flex items-center justify-center relative overflow-hidden">
      {/* Stars */}
      {starPositions.map((pos, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-white sparkle"
          style={{
            left: pos.left,
            top: pos.top,
            width: `${pos.size}rem`,
            height: `${pos.size}rem`,
            animationDelay: `${pos.delay}s`
          }}
        ></div>
      ))}
      
      {/* Lantern */}
      <div 
        className={`relative cursor-pointer ${lanternReleased ? 'animate-[float_5s_ease-out_forwards]' : 'floating-slow'}`}
        onClick={releaseLantern}
        style={lanternReleased ? { animation: 'float 15s ease-out forwards' } : {}}
      >
        <div className="relative">
          <div className="w-32 h-40 bg-gradient-to-b from-amber-200 to-amber-400 rounded-t-full opacity-90"></div>
          <div className="w-32 h-1 bg-amber-800"></div>
          <div className="w-20 h-6 mx-auto bg-amber-800 rounded-b-lg"></div>
          
          {/* Lantern glow */}
          <div className="absolute inset-0 bg-amber-500/20 rounded-t-full filter blur-lg"></div>
          
          {/* Fire inside lantern */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-6 bg-amber-500 rounded-full animate-pulse"></div>
        </div>
        
        {!lanternReleased && (
          <div className="text-white/80 text-center mt-6 text-lg animate-pulse">
            Tap to Release
          </div>
        )}
      </div>
      
      {/* Message */}
      {showMessage && (
        <div className="absolute inset-x-0 text-center slide-up">
          <p className="text-white text-xl md:text-3xl font-semibold">
            Make a wish, Love 💫
          </p>
        </div>
      )}
      
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} lanternReleased={lanternReleased} />
    </div>
  );
};

export default LanternSection;