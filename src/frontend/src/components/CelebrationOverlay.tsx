import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function CelebrationOverlay() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate floating hearts
    const heartCount = 30;
    const newHearts: FloatingHeart[] = [];

    for (let i = 0; i < heartCount; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 30,
      });
    }

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up opacity-0"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animationName: 'floatUp',
          }}
        >
          <Heart
            className="text-primary"
            fill="currentColor"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      ))}

      {/* Confetti-like hearts from top */}
      {hearts.slice(0, 15).map((heart) => (
        <div
          key={`top-${heart.id}`}
          className="absolute -top-20 animate-fall opacity-0"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay * 0.5}s`,
            animationDuration: `${heart.duration * 0.8}s`,
            animationName: 'fall',
          }}
        >
          <Heart
            className="text-accent"
            fill="currentColor"
            style={{
              width: `${heart.size * 0.8}px`,
              height: `${heart.size * 0.8}px`,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          />
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: floatUp 4s ease-in forwards;
        }

        .animate-fall {
          animation: fall 3s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
