
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  className,
  delay = 0,
}: TestimonialCardProps) => {
  const animationDelay = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={cn(
        "p-8 rounded-2xl border border-gray-100 bg-white shadow-orbit-sm hover:shadow-orbit transition-all duration-300 opacity-0 animate-fade-in",
        className
      )}
      style={animationDelay}
    >
      <Quote size={32} className="text-orbit-purple/30 mb-4" />
      <p className="text-lg mb-6">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orbit-purple/20 to-orbit-blue/20 flex items-center justify-center text-orbit-purple font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
