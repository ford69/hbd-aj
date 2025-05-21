import React, { useEffect, useState } from 'react';
import NavigationButtons from './NavigationButtons';
import FloatingHeart from './FloatingHeart';

interface LoveNoteSectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

const LoveNoteSection: React.FC<LoveNoteSectionProps> = ({ onNext, onPrevious }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  // Generate random positions for hearts
  const heartPositions = Array.from({ length: 10 }, () => ({
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    size: Math.random() * 1 + 0.5,
    delay: Math.random() * 2,
    duration: Math.random() * 4 + 6,
  }));

  return (
    <div className="love-note-gradient h-full w-full flex items-center justify-center overflow-hidden">
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
      
      <div className="max-w-2xl mx-auto px-6 text-center z-10">
        <div 
          className={`bg-white/30 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg ${visible ? 'fade-in' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl text-pink-900 mb-6">With Love from Ford</h2>
          <p className="text-lg text-pink-800 leading-relaxed mb-4">
           From the very first moment until now, it's been a beautiful roller coaster of emotions. Every moment with you is unique, and never quite the same. You have an open heart, a radiant spirit, and a soul that touches everyone around you
           Wishing you the happiest birthday—you truly mean so much to me.
          </p>
          <p className="text-lg text-pink-800 leading-relaxed mb-8">
            I love you more than words can say. Happy birthday, AJ.
          </p>
          <div className="text-4xl heart">💖</div>
        </div>
      </div>
      
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};

export default LoveNoteSection;