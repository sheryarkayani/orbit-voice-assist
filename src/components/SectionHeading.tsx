
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  subtitleClassName?: string;
  titleClassName?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  centered = false,
  subtitleClassName,
  titleClassName,
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 
        className={cn(
          "text-3xl md:text-4xl font-display font-bold leading-tight md:leading-tight opacity-0 animate-fade-in",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "text-xl text-muted-foreground mt-4 max-w-3xl opacity-0 animate-fade-in stagger-1",
            centered && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
