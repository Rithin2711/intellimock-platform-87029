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
        <h1 className="intellimock-brand-heading" tabIndex={-1} aria-label="INTELLIMOCK">INTELLIMOCK</h1>
        <form className="auth-form modern-auth-form" onSubmit={handleSubmit} autoComplete="on" style={{marginTop: 4, marginBottom: 0}}>
          <div className="input-group" style={{marginBottom: "0.75rem"}}>
            <label htmlFor="username" className="modern-auth-label" style={{marginBottom: 6}}>
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
              style={{marginBottom: 0}}
            />
          </div>
          <div className="input-group" style={{marginBottom: "0.6rem"}}>
            <label htmlFor="password" className="modern-auth-label" style={{marginBottom: 6}}>
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
              style={{marginBottom: 0}}
            />
          </div>
          {error && <div className="auth-error modern-auth-error" role="alert">{error}</div>}
          <button
            type="submit"
            className="cta-button auth-btn modern-auth-btn"
            disabled={loading}
            aria-disabled={loading}
            style={{marginTop: "1.1rem", marginBottom: 0}}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
      <div className="auth-footer" style={{marginTop: 12}}>
        <span>
          No account? <a href="/register">Sign Up</a>
        </span>
      </div>
    </div>
  );
}
