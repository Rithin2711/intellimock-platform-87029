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
          {/* IntelliMock SVG brand icon, longform */}
          <svg width="110" height="48" viewBox="0 0 110 48">
            <defs>
              <linearGradient id="imock-logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5e35b1" />
                <stop offset="80%" stopColor="#d81b60" />
              </linearGradient>
            </defs>
            <circle cx="27" cy="24" r="19" fill="url(#imock-logo-grad)" />
            <text
              x="27"
              y="29"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill="#ffce00"
              fontFamily="Helvetica Neue, Arial, sans-serif"
              letterSpacing="1.5"
              data-testid="logo-circle-text"
            >
              IntelliMock
            </text>
            {/* The text logo next to circle for more explicit branding */}
            <text
              x="56"
              y="29"
              textAnchor="start"
              fontSize="20"
              fontWeight="bold"
              fill="#5e35b1"
              fontFamily="Helvetica Neue, Arial, sans-serif"
              letterSpacing="1.5"
              data-testid="logo-text"
            >
              IntelliMock
            </text>
          </svg>
        </div>
        <h1
          className="intellimock-gradient-title"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 800,
            fontSize: "2.2rem",
            letterSpacing: "0.1em",
            textAlign: "center",
            margin: "0 0 2rem 0",
            background: "linear-gradient(90deg, #283593 0%, #5e35b1 50%, #d81b60 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textTransform: "uppercase",
            filter: "drop-shadow(0px 2px 9px rgba(40,53,147,0.16))",
            lineHeight: 1.08,
          }}
        >
          IntelliMock
        </h1>
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
