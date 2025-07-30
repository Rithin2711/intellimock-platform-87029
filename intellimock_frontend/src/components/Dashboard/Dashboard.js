import React from "react";
import "./Dashboard.css";

// PUBLIC_INTERFACE
/**
 * Dashboard page—main entry for authenticated users.
 * Offers navigation to all feature modules; displays recent endpoints, usage, and warnings.
 */
export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-root">
      <header className="header-bar">
        <span className="brand-logo">IntelliMock</span>
        <button onClick={onLogout} className="cta-button" style={{ float: "right" }}>
          Logout
        </button>
      </header>
      <main className="dashboard-main content-area">
        <h2>Welcome, {user.username}!</h2>
        <div className="dashboard-grid">
          <a className="dashboard-card" href="/upload">Upload Files</a>
          <a className="dashboard-card" href="/endpoints">Edit Mock Endpoints</a>
          <a className="dashboard-card" href="/llm-key">Manage LLM API Key</a>
          <a className="dashboard-card" href="/validation">Validate Responses</a>
          <a className="dashboard-card" href="/logs">View Activity Logs</a>
          <a className="dashboard-card" href="/admin">Admin Dashboard</a>
        </div>
      </main>
    </div>
  );
}
