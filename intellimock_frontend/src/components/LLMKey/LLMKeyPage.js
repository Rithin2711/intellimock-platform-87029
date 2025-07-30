import React, { useState } from "react";
import "./LLMKeyPage.css";

// PUBLIC_INTERFACE
export default function LLMKeyPage({ user }) {
  const [llmKey, setLlmKey] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    if (llmKey.length < 8) {
      setError("Key too short—please enter a valid secret.");
      setSaved(false);
      return;
    }
    setError("");
    setSaved(true);
    // TODO: send to backend securely!
  }

  return (
    <div className="llmkey-root content-area">
      <h2>Configure LLM API Key</h2>
      <label htmlFor="llmKey">Your LLM API Key</label>
      <input
        type="password"
        id="llmKey"
        name="llmKey"
        className="llmkey-input"
        autoComplete="off"
        value={llmKey}
        onChange={(e) => setLlmKey(e.target.value)}
      />
      <div style={{ margin: "10px 0" }}>
        <button className="cta-button" onClick={handleSave}>
          Save Key
        </button>
        {saved && <span className="llmkey-saved">✔️ Saved!</span>}
        {error && <span className="llmkey-error">{error}</span>}
      </div>
      <label>
        <input type="checkbox" style={{ marginRight: 8 }} />
        Use LLM-generated responses by default
      </label>
      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#5e35b1" }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
