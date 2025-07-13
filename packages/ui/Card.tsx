// NOTE: Ensure tsconfig.json has "esModuleInterop": true and "jsx": "react-jsx" for React/JSX support.
import React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'regular' | 'neubrutalism';
};

export function Card({ variant = 'regular', className = '', ...props }: CardProps) {
  let base = variant === 'neubrutalism' ? 'card-neubrutalism' : 'card';
  return <div className={`${base} ${className}`} {...props} />;
} 