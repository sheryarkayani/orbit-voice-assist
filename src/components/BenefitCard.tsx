
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconColor?: string;
  delay?: number;
}

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  className,
  iconColor = "text-orbit-purple",
  delay = 0
}: BenefitCardProps) => {
  const animationDelay = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={cn(
        "benefit-card opacity-0 animate-fade-in",
        className
      )}
      style={animationDelay}
    >
      <div className={cn("inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br from-orbit-purple/10 to-orbit-blue/10 mb-5", iconColor)}>
        <Icon size={24} className="text-current" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
