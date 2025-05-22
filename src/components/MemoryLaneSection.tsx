import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NavigationButtons from './NavigationButtons';

interface MemoryLaneSectionProps {
  onNext: () => void;
  onPrevious: () => void;
}

interface MemoryItem {
  caption: string;
  imageUrl: string;
}

const MemoryLaneSection: React.FC<MemoryLaneSectionProps> = ({ onNext, onPrevious }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample memory items - replace with actual images
  const memories: MemoryItem[] = [
    {
      caption: "2025 💕",
      imageUrl: "/memories/memories-2.JPG"
    },
    {
      caption: "2023 🎉",
      imageUrl: "/memories/memories-3.JPG"
    },
    {
      caption: "2022 🎂",
      imageUrl: "/memories/memories-4.JPG"
    },
    {
      caption: "Your beautiful smile",
      imageUrl: "/memories/memories-5.JPG"
    },
  ];
  
  const nextMemory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % memories.length);
  };
  
  const prevMemory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + memories.length) % memories.length);
  };

  return (
    <div className="memories-gradient h-full w-full flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center text-indigo-900 mb-8 fade-in">
          Our Memory Lane
        </h2>
        
        <div className="relative w-full">
          <div className="flex justify-center py-4">
            <div className="relative w-full max-w-lg">
              <div 
                className="memory-card bg-white p-4 rounded-xl shadow-lg"
                style={{
                  opacity: 1,
                  transform: `scale(1)`,
                  transition: 'all 0.5s ease-out'
                }}
              >
                <img 
                  src={memories[activeIndex].imageUrl} 
                  alt={memories[activeIndex].caption}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-lg text-center text-indigo-800 font-medium">
                  {memories[activeIndex].caption}
                </p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevMemory}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all nav-button"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextMemory}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2 rounded-full hover:bg-white/50 transition-all nav-button"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? 'bg-indigo-600' : 'bg-indigo-300'}`}
            />
          ))}
        </div>
      </div>
      
      <NavigationButtons onNext={onNext} onPrevious={onPrevious} />
    </div>
  );
};

export default MemoryLaneSection;