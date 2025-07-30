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
        <h1 className="intellimock-brand-heading" tabIndex={-1} aria-label="INTELLIMOCK">INTELLIMOCK</h1>
        <form className="auth-form modern-auth-form" onSubmit={handleSubmit} autoComplete="on" style={{marginTop: 4, marginBottom: 0}}>
          <div className="input-group" style={{marginBottom: "0.65rem"}}>
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
              style={{marginBottom: 0}}
            />
          </div>
          <div className="input-group" style={{marginBottom: "0.65rem"}}>
            <label htmlFor="email" className="modern-auth-label" style={{marginBottom: 6}}>
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
              style={{marginBottom: 0}}
            />
          </div>
          <div className="input-group" style={{marginBottom: "0.65rem"}}>
            <label htmlFor="password" className="modern-auth-label" style={{marginBottom: 6}}>
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
              style={{marginBottom: 0}}
            />
          </div>
          <div className="input-group" style={{marginBottom: "0.65rem"}}>
            <label htmlFor="confirm" className="modern-auth-label" style={{marginBottom: 6}}>
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
              style={{marginBottom: 0}}
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
            style={{marginTop: "1.1rem", marginBottom: 0}}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>
      </div>
      <div className="auth-footer" style={{marginTop: 12}}>
        <span>
          Already have an account? <a href="/login">Login</a>
        </span>
      </div>
    </div>
  );
}
