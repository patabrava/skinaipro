import React, { useState } from 'react';

export function SignUpForm({ onSubmit }: { onSubmit?: (email: string, password: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setError(null);
    onSubmit?.(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="card-neubrutalism" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2 className="mb-lg">Sign Up</h2>
      <div className="form-group">
        <label className="form-label" htmlFor="signup-email">Email Address</label>
        <input
          id="signup-email"
          type="email"
          className={`form-input${error && !email ? ' error' : ''}`}
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="signup-password">Password</label>
        <input
          id="signup-password"
          type="password"
          className={`form-input${error && (!password || password.length < 6) ? ' error' : ''}`}
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      {error && <div className="alert alert-error mb-md">{error}</div>}
      <button type="submit" className="btn btn-neubrutalism" style={{ width: '100%' }}>Sign Up</button>
    </form>
  );
} 