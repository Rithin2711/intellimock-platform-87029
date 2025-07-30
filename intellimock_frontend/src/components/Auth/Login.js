import React, { useState } from "react";
import "./Auth.css";

/**
 * Login form for IntelliMock.
 * Modern, compact styling inspired by premium SaaS UIs.
 * Features: keeps all login functionality, new icon, visually polished layout, accessibility support.
 */
// PUBLIC_INTERFACE
export default function Login({ onLogin, error, loading }) {
  const [form, setForm] = useState({ username: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(form.username, form.password);
  }

  return (
    <div className="auth-container">
      <div className="auth-box modern-auth-box">
        {/* IntelliMock brand icon */}
        <div className="auth-logo-svg" aria-hidden="true">
          {/* Placeholder SVG symbol: Could be replaced by a real brand icon */}
          <svg width="48" height="48" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="imock-logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5e35b1" />
                <stop offset="80%" stopColor="#d81b60" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="19" fill="url(#imock-logo-grad)" />
            <text
              x="24"
              y="29"
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
              fill="#ffce00"
              fontFamily="Helvetica Neue, Arial, sans-serif"
              letterSpacing="1.5"
            >
              IM
            </text>
          </svg>
        </div>
        <h1 className="brand-logo modern-brand-title">Welcome Back</h1>
        <form className="auth-form modern-auth-form" onSubmit={handleSubmit} autoComplete="on">
          <div className="input-group">
            <label htmlFor="username" className="modern-auth-label">
              Username
            </label>
            <input
              name="username"
              autoComplete="username"
              type="text"
              id="username"
              className="auth-input modern-auth-input"
              value={form.username}
              onChange={handleChange}
              required
              aria-label="Username"
              spellCheck="false"
              autoFocus
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="modern-auth-label">
              Password
            </label>
            <input
              name="password"
              autoComplete="current-password"
              type="password"
              id="password"
              className="auth-input modern-auth-input"
              value={form.password}
              onChange={handleChange}
              required
              aria-label="Password"
            />
          </div>
          {error && <div className="auth-error modern-auth-error" role="alert">{error}</div>}
          <button
            type="submit"
            className="cta-button auth-btn modern-auth-btn"
            disabled={loading}
            aria-disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
        {/* Optionally, bring Edit Mode toggle/button inside below if it exists */}
      </div>
      <div className="auth-footer">
        <span>
          No account? <a href="/register">Sign Up</a>
        </span>
      </div>
    </div>
  );
}
