import React from 'react';
import './App.css';

/**
 * HeaderBar for IntelliMock.
 * Renders the brand logo/title at left, tagline + graphic at right.
 **/
function HeaderBar() {
  return (
    <header className="header-bar">
      <span className="brand-logo">TATA ELXSI</span>
      <div className="header-accent">
        <span className="header-tagline">Home to 8 Billion Possibilities</span>
        <span className="header-arrow">
          {/* Stylized right arrow graphic (SVG): yellow/magenta */}
          <svg width="32" height="32" viewBox="0 0 32 32" role="img" fill="none">
            <g>
              <polygon points="4,16 24,16 17,9 19,7 30,16 19,25 17,23 24,16 4,16"
                fill="#FFC900" stroke="#E23B88" strokeWidth="2" />
            </g>
          </svg>
        </span>
      </div>
    </header>
  );
}

/**
 * Placeholder for main IntelliMock content.
 * Slots future widgets (auth, upload, endpoint config, etc.).
 **/
function MainContent() {
  return (
    <main className="content-area">
      {/* Placeholder sections for future: */}
      <section className="main-placeholder">
        <h1 className="page-title">Welcome to IntelliMock</h1>
        <p className="subtitle">A smarter way to simulate, test, and validate APIs with AI.</p>
        <div className="placeholder-section">
          {/* Example structure for future features */}
          <div className="placeholder-card auth-placeholder">
            <span className="placeholder-label">Auth / Onboarding</span>
          </div>
          <div className="placeholder-card upload-placeholder">
            <span className="placeholder-label">API Doc & Data Upload</span>
          </div>
          <div className="placeholder-card endpoint-placeholder">
            <span className="placeholder-label">Endpoint Management</span>
          </div>
        </div>
        <div className="placeholder-section">
          <div className="placeholder-card test-placeholder">
            <span className="placeholder-label">API Test & Validation</span>
          </div>
          <div className="placeholder-card profile-placeholder">
            <span className="placeholder-label">Profile & Settings</span>
          </div>
        </div>
      </section>
    </main>
  );
}

// PUBLIC_INTERFACE
/**
 * App root for IntelliMock.
 * Lays out HeaderBar and main content per design spec.
 */
function App() {
  return (
    <div className="im-root">
      <HeaderBar />
      <MainContent />
    </div>
  );
}

export default App;
