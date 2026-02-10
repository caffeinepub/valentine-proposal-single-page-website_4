import { useState } from 'react';
import { Heart, User } from 'lucide-react';

interface PersonalPhotoFrameProps {
  className?: string;
}

const PERSONAL_PHOTO_URL = '/assets/WhatsApp Image 2026-02-10 at 00.43.36.jpeg';

export default function PersonalPhotoFrame({ className = '' }: PersonalPhotoFrameProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-muted ${className}`}>
      {!imageError ? (
        <>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground">Loading photo...</p>
              </div>
            </div>
          )}
          <img 
            src={PERSONAL_PHOTO_URL}
            alt="Personal photo"
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="relative">
              <User className="w-16 h-16 text-primary/40" strokeWidth={1.5} />
              <Heart 
                className="w-6 h-6 text-primary absolute -top-1 -right-1 animate-heartbeat" 
                fill="currentColor" 
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Photo unavailable</p>
              <p className="text-xs text-muted-foreground max-w-[200px]">
                But you're still in my heart
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
