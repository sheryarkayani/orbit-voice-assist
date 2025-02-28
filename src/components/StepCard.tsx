
import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const StepCard = ({
  number,
  title,
  description,
  className,
  delay = 0,
}: StepCardProps) => {
  const animationDelay = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={cn(
        "p-6 opacity-0 animate-fade-in",
        className
      )}
      style={animationDelay}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orbit-purple to-orbit-blue flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
