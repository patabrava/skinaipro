// NOTE: Ensure tsconfig.json has "esModuleInterop": true and "jsx": "react-jsx" for React/JSX support.
import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  success?: boolean;
};

export function Input({ error, success, className = '', ...props }: InputProps) {
  let base = 'form-input';
  if (error) base += ' error';
  if (success) base += ' success';
  return <input className={`${base} ${className}`} {...props} />;
} 