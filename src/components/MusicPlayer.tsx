'use client';

import { Pause, Play, Volume2, VolumeOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error al reproducir el audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Reproducir automáticamente al cargar (con el consentimiento del usuario)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.error('Error al reproducir automáticamente:', error);
        });
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
      }
    };

    // Intentar reproducir después de la primera interacción del usuario
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('keydown', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-full">
      <audio 
        ref={audioRef} 
        src="/music.mp3" 
        loop 
        className="hidden"
      />
      
      <button 
        onClick={togglePlay}
        className="p-2 text-white hover:text-pink-400 transition-colors"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? <Pause className='size-5' /> : <Play className='size-5' />}
      </button>
      
      <button 
        onClick={toggleMute}
        className="p-2 text-white hover:text-pink-400 transition-colors"
        aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
      >
        {isMuted ? <VolumeOff className='size-5' /> : <Volume2 className='size-5' />}
      </button>
    </div>
  );
}
