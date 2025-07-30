import React, { useState } from "react";
import "./Auth.css";

// PUBLIC_INTERFACE
/**
 * Login form for IntelliMock.
 * Handles both username and password fields, applies style tokens, and supports error display.
 */
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
      <div className="auth-box">
        <h1 className="brand-logo">IntelliMock</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            autoComplete="username"
            type="text"
            id="username"
            className="auth-input"
            value={form.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            autoComplete="current-password"
            type="password"
            id="password"
            className="auth-input"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <div className="auth-error">{error}</div>}
          <button
            type="submit"
            className="cta-button auth-btn"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
      <div className="auth-footer">
        <span>
          No account? <a href="/register">Sign Up</a>
        </span>
      </div>
    </div>
  );
}
