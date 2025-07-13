import React, { useState } from 'react';

export function SignInForm({ onSubmit }: { onSubmit?: (email: string, password: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    setError(null);
    onSubmit?.(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="card-neubrutalism" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2 className="mb-lg">Sign In</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="signin-email">Email Address</label>
        <input
          id="signin-email"
          type="email"
          className={`form-input${error && !email ? ' error' : ''}`}
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="signin-password">Password</label>
        <input
          id="signin-password"
          type="password"
          className={`form-input${error && !password ? ' error' : ''}`}
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      {error && <div className="alert alert-error mb-md">{error}</div>}
      <button type="submit" className="btn btn-neubrutalism" style={{ width: '100%' }}>Sign In</button>
    </form>
  );
} 