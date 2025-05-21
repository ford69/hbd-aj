import React, { useEffect, useRef, useState } from 'react';

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/burning-blue.mp3"); // local file from public/audio
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio play failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current?.pause();
    }

    // Cleanup on component unmount
    return () => {
      audioRef.current?.pause();
    };
  }, [isPlaying]);

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={() => setIsPlaying(prev => !prev)}
        className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default MusicPlayer;
