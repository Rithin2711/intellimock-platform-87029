import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IM_THEME from "./theme";

// --- UI HEADER ---
function IMHeader() {
  return (
    <header className="im-header" role="banner">
      <span className="im-header-logo">TATA ELXSI</span>
      <span className="im-header-accent">
        <span className="im-header-tagline">Home to 8 Billion Possibilities</span>
        <span className="im-header-arrow" aria-hidden="true">
          {/* Geometric-arrow icon */}
          <svg viewBox="0 0 32 32" width="32" height="32">
            <polygon
              points="4,16 24,16 17,9 19,7 30,16 19,25 17,23 24,16 4,16"
              fill={IM_THEME.colors.accentYellow}
              stroke={IM_THEME.colors.primaryPink}
              strokeWidth="2"
            />
          </svg>
        </span>
      </span>
    </header>
  );
}

// --- PAGE SHELLS ---
// Individual route components with placeholder content (can be replaced/extended later)

function AuthPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Sign In / Register</h1>
      <div className="im-card">
        <span className="im-card-label">Authentication Area</span>
        <div className="im-placeholder">
          User sign-in, registration forms, SSO, etc.
        </div>
      </div>
    </section>
  );
}

function UploadPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">API & Data Upload</h1>
      <div className="im-card">
        <span className="im-card-label">Upload Section</span>
        <div className="im-placeholder">
          Upload API docs, datasets, and sample responses.
        </div>
      </div>
    </section>
  );
}

function MocksPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Mock Endpoints</h1>
      <div className="im-card">
        <span className="im-card-label">Mocks Management</span>
        <div className="im-placeholder">
          List, configure, and edit endpoint mocks/rules.
        </div>
      </div>
    </section>
  );
}

function ValidationPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Response Validation</h1>
      <div className="im-card">
        <span className="im-card-label">Validation Results</span>
        <div className="im-placeholder">
          Compare mock and reference responses; highlight diffs.
        </div>
      </div>
    </section>
  );
}

function LogsPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Platform Logs</h1>
      <div className="im-card">
        <span className="im-card-label">System & Audit Log</span>
        <div className="im-placeholder">
          View request logs, errors, and actions.
        </div>
      </div>
    </section>
  );
}

function AdminPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Admin Control Panel</h1>
      <div className="im-card">
        <span className="im-card-label">Admin Area</span>
        <div className="im-placeholder">
          Manage users, roles, workspace, and platform-wide settings.
        </div>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="im-section">
      <h1 className="im-page-title">Page Not Found</h1>
      <div className="im-card im-placeholder">
        The page you requested does not exist.
      </div>
    </section>
  );
}

// --- MAIN LAYOUT & ROUTING ---
// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div>
        <IMHeader />
        <main className="im-content-bg" role="main">
          <Routes>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/mocks" element={<MocksPage />} />
            <Route path="/validation" element={<ValidationPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
