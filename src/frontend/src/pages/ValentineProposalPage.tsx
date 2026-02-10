import { useState } from 'react';
import { Heart } from 'lucide-react';
import PlayfulNoButton from '../components/PlayfulNoButton';
import CelebrationOverlay from '../components/CelebrationOverlay';
import PersonalPhotoFrame from '../components/PersonalPhotoFrame';

type ViewState = 'proposal' | 'accepted';

export default function ValentineProposalPage() {
  const [viewState, setViewState] = useState<ViewState>('proposal');
  const [showCelebration, setShowCelebration] = useState(false);
  const [isYesClicked, setIsYesClicked] = useState(false);

  const handleYes = () => {
    // Trigger click animation immediately
    setIsYesClicked(true);
    
    // Delay state transition to allow animation to be visible
    setTimeout(() => {
      setViewState('accepted');
      setShowCelebration(true);
      setIsYesClicked(false);
      
      // Auto-reduce celebration intensity after 5 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 5000);
    }, 400);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-4">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
            <h1 className="text-2xl font-bold text-primary">A Special Question</h1>
            <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
          </div>
        </header>

        {/* Content area */}
        <section className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="container max-w-4xl mx-auto">
            {viewState === 'proposal' ? (
              <div className="animate-fadeInUp">
                <div className="text-center space-y-8">
                  {/* Personal photo at the top */}
                  <div className="flex justify-center mb-6">
                    <PersonalPhotoFrame className="w-48 h-48 md:w-64 md:h-64" />
                  </div>

                  {/* Illustration */}
                  <div className="flex justify-center mb-8">
                    <img 
                      src="/assets/generated/valentine-illustration.dim_900x900.png"
                      alt="Valentine illustration"
                      className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
                    />
                  </div>

                  {/* Question */}
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                      Will you be my Valentine, Yaanu?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                      I've been thinking about this for a while, and I can't imagine celebrating this day with anyone else but you.
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <button
                      onClick={handleYes}
                      disabled={isYesClicked}
                      className={`group relative px-12 py-6 bg-primary text-primary-foreground rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50 focus-visible:ring-4 focus-visible:ring-primary/50 ${isYesClicked ? 'animate-yesClick' : ''}`}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <Heart className="w-8 h-8" fill="currentColor" />
                        Yes!
                        <Heart className="w-8 h-8" fill="currentColor" />
                      </span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    </button>

                    <PlayfulNoButton />
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeInUp">
                <div className="text-center space-y-8">
                  {/* Success illustration */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <img 
                        src="/assets/generated/valentine-illustration.dim_900x900.png"
                        alt="Valentine celebration"
                        className="w-56 h-56 md:w-72 md:h-72 object-contain"
                      />
                      <div className="absolute -top-4 -right-4 animate-heartbeat">
                        <Heart className="w-16 h-16 text-primary" fill="currentColor" />
                      </div>
                      <div className="absolute -bottom-4 -left-4 animate-heartbeat" style={{ animationDelay: '0.3s' }}>
                        <Heart className="w-12 h-12 text-accent" fill="currentColor" />
                      </div>
                    </div>
                  </div>

                  {/* Success message */}
                  <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                      You said Yes! 💕
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto leading-relaxed">
                      You've just made me the happiest person in the world! I can't wait to spend this Valentine's Day with you and create beautiful memories together.
                    </p>
                    <div className="pt-4">
                      <p className="text-lg md:text-xl text-muted-foreground italic">
                        This is going to be the best Valentine's Day ever! ❤️
                      </p>
                    </div>
                  </div>

                  {/* Decorative hearts */}
                  <div className="flex justify-center gap-4 pt-8">
                    {[...Array(5)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-6 h-6 md:w-8 md:h-8 text-primary animate-heartbeat"
                        fill="currentColor"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 px-4 border-t border-border/50 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-primary inline-block animate-heartbeat" fill="currentColor" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                caffeine.ai
              </a>
              <span className="text-muted-foreground/50">•</span>
              <span>© {new Date().getFullYear()}</span>
            </p>
          </div>
        </footer>
      </main>

      {/* Celebration overlay */}
      {showCelebration && <CelebrationOverlay />}
    </div>
  );
}
