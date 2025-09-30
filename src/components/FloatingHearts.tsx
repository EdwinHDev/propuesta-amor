import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingHeartsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  color?: string;
  opacity?: number;
}

export default function FloatingHearts({
  count = 10,
  minSize = 12,
  maxSize = 24,
  minDuration = 10,
  maxDuration = 20,
  color = '#ff6b81',
  opacity = 0.8,
}: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: count }, (_, i) => createHeart(i));
    setHearts(initialHearts);

    // Add new hearts at intervals
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        // Remove hearts that are out of view
        const filteredHearts = prevHearts.filter(heart => 
          Date.now() - heart.id < (heart.duration * 1000)
        );
        
        // Add new heart if below count
        if (filteredHearts.length < count) {
          return [...filteredHearts, createHeart(Date.now())];
        }
        return filteredHearts;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count, minSize, maxSize, minDuration, maxDuration]);

  const createHeart = (id: number): HeartProps => ({
    id,
    left: `${Math.random() * 100}%`,
    size: Math.random() * (maxSize - minSize) + minSize,
    duration: Math.random() * (maxDuration - minDuration) + minDuration,
    delay: Math.random() * 5,
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 ">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute -bottom-20 animate-float-up "
          style={{
            left: heart.left,
            animation: `float-up ${heart.duration}s ease-in ${heart.delay}s forwards`,
          }}
        >
          <Heart 
            size={heart.size} 
            fill={color} 
            color={color}
            style={{ 
              opacity,
              
            }}
            className='transition-all'
          />
        </div>
      ))}
      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
