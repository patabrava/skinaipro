// NOTE: Ensure tsconfig.json has "esModuleInterop": true and "jsx": "react-jsx" for React/JSX support.
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'neubrutalism';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  let base = 'btn';
  if (variant === 'primary') base += ' btn-primary';
  if (variant === 'secondary') base += ' btn-secondary';
  if (variant === 'neubrutalism') base += ' btn-neubrutalism';
  if (size === 'sm') base += ' btn-sm';
  if (size === 'lg') base += ' btn-lg';
  return <button className={`${base} ${className}`} {...props} />;
} 