import React from "react";
import "./EndpointEditorPage.css";

// PUBLIC_INTERFACE
export default function EndpointEditorPage({ user }) {
  // TODO: Implement visual ConditionBuilder & TestResponseViewer
  return (
    <div className="endpointeditor-root content-area">
      <h2>Mock Endpoint Editor</h2>
      <div className="endpointeditor-toolbar">
        <button className="cta-button">Create Endpoint</button>
        <button className="cta-button" style={{ marginLeft: 12 }}>
          Load Example
        </button>
      </div>
      <div className="endpointeditor-list">
        {/* Placeholder for endpoint list */}
        <div className="endpointeditor-card">
          <div>
            <strong>GET /orders</strong>
            <span style={{ marginLeft: 8, fontSize: 14 }} className="endpoint-tag">MOCK</span>
            <span style={{ marginLeft: 8, fontSize: 14 }}>Status: <b>Active</b></span>
          </div>
          <a href="#" className="cta-button" style={{ marginTop: 7 }}>Edit Rules</a>
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#5e35b1" }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
