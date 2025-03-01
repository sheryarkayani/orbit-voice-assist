
import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  shopifyThemed?: boolean;
}

const StepCard = ({
  number,
  title,
  description,
  className,
  delay = 0,
  shopifyThemed = true,
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
        <div className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
          shopifyThemed ? "bg-gradient-to-br from-[#95BF47] to-[#5E8E3E]" : "bg-gradient-to-br from-orbit-purple to-orbit-blue"
        )}>
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
