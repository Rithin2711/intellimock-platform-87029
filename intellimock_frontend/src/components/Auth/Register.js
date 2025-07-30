import React, { useState } from "react";
import "./Auth.css";

// PUBLIC_INTERFACE
/**
 * Registration form for IntelliMock.
 */
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
      <div className="auth-box">
        <h1 className="brand-logo">Register</h1>
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
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="auth-input"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            autoComplete="new-password"
            type="password"
            id="password"
            className="auth-input"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            name="confirm"
            autoComplete="new-password"
            type="password"
            id="confirm"
            className="auth-input"
            value={form.confirm}
            onChange={handleChange}
            required
          />
          {passwordMismatch && (
            <div className="auth-error">Passwords do not match.</div>
          )}
          {error && <div className="auth-error">{error}</div>}
          <button
            type="submit"
            className="cta-button auth-btn"
            disabled={loading || passwordMismatch}
          >
            {loading ? "Registering..." : "Register"}
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
