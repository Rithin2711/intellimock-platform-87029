import React, { useState } from "react";
import "./Auth.css";

/**
 * Registration form for IntelliMock.
 * Modern compact design, brand icon, input field, and button effects.
 */
// PUBLIC_INTERFACE
export default function Register({ onRegister, error, loading }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirm: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirm) return;
    onRegister(form.username, form.email, form.password);
  }

  const passwordMismatch =
    form.password && form.confirm && form.password !== form.confirm;

  return (
    <div className="auth-container">
      <div className="auth-box modern-auth-box">
        <div className="auth-logo-svg" aria-hidden="true">
          {/* Same SVG as login for visual brand consistency */}
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
        <h1 className="brand-logo modern-brand-title">Create Your Account</h1>
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
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="modern-auth-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="auth-input modern-auth-input"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
              aria-label="Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="modern-auth-label">
              Password
            </label>
            <input
              name="password"
              autoComplete="new-password"
              type="password"
              id="password"
              className="auth-input modern-auth-input"
              value={form.password}
              onChange={handleChange}
              required
              aria-label="Password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm" className="modern-auth-label">
              Confirm Password
            </label>
            <input
              name="confirm"
              autoComplete="new-password"
              type="password"
              id="confirm"
              className="auth-input modern-auth-input"
              value={form.confirm}
              onChange={handleChange}
              required
              aria-label="Confirm password"
            />
          </div>
          {passwordMismatch && (
            <div className="auth-error modern-auth-error" role="alert">
              Passwords do not match.
            </div>
          )}
          {error && <div className="auth-error modern-auth-error" role="alert">{error}</div>}
          <button
            type="submit"
            className="cta-button auth-btn modern-auth-btn"
            disabled={loading || passwordMismatch}
            aria-disabled={loading || passwordMismatch}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="auth-footer">
        <span>
          Already have an account? <a href="/login">Login</a>
        </span>
      </div>
    </div>
  );
}
