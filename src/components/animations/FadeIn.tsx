import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function FadeIn({ children, delay = '0', direction = 'up' }: FadeInProps) {
  const baseClasses = "opacity-0 transition-all duration-700 ease-out";
  const delayClass = `delay-[${delay}ms]`;
  
  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  const animateClass = `animate-fade-in ${directionClasses[direction]}`;

  return (
    <div className={`${baseClasses} ${delayClass} ${animateClass}`}>
      {children}
    </div>
  );
}