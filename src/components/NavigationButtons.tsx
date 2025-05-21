import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  lanternReleased?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  onNext, 
  onPrevious,
  lanternReleased 
}) => {
  return (
    <div className="absolute bottom-8 w-full flex justify-between px-6">
      <button 
        onClick={onPrevious}
        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-all nav-button"
      >
        <ArrowLeft size={20} />
        <span className="sr-only">Previous</span>
      </button>
      
      {lanternReleased !== false && (
        <button 
          onClick={onNext}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/40 transition-all nav-button"
        >
          <ArrowRight size={20} />
          <span className="sr-only">Next</span>
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;