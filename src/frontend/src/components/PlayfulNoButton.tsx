import { useState } from 'react';
import { X } from 'lucide-react';

export default function PlayfulNoButton() {
  const [isHidden, setIsHidden] = useState(false);

  const handleMouseEnter = () => {
    setIsHidden(true);
  };

  // Don't render if hidden
  if (isHidden) {
    return null;
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      className="px-10 py-5 bg-secondary text-secondary-foreground rounded-full text-xl md:text-2xl font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary/50 focus-visible:ring-4 focus-visible:ring-secondary/50 whitespace-nowrap"
      aria-label="No button"
    >
      <span className="flex items-center gap-2">
        <X className="w-6 h-6" />
        No
      </span>
    </button>
  );
}
