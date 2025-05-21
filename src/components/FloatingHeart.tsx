import React from 'react';

interface FloatingHeartProps {
  style?: React.CSSProperties;
}

const FloatingHeart: React.FC<FloatingHeartProps> = ({ style }) => {
  return (
    <div 
      className="absolute floating opacity-50 text-white/40"
      style={style}
    >
      💖
    </div>
  );
};

export default FloatingHeart;