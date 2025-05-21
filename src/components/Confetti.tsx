import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  animationDuration: number;
}

const Confetti: React.FC = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    const colors = ['#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#cdb4db'];
    const pieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        rotation: Math.random() * 360,
        animationDuration: Math.random() * 3 + 2,
      });
    }
    
    setConfettiPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute rounded-sm"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall ${piece.animationDuration}s linear forwards`,
          }}
        />
      ))}
      
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Confetti;