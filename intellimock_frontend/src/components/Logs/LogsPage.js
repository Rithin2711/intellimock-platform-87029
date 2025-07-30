import React, { useState } from "react";
import "./LogsPage.css";

// PUBLIC_INTERFACE
export default function LogsPage({ user }) {
  const [filter, setFilter] = useState("");
  // Demo data
  const logs = [
    { ts: "2024-06-01 12:33", path: "/orders", method: "GET", code: 200 },
    { ts: "2024-06-01 12:37", path: "/users", method: "POST", code: 500 },
    { ts: "2024-06-01 12:38", path: "/llm/generate", method: "POST", code: 200 },
  ];
  const filtered = filter
    ? logs.filter((l) => l.path.includes(filter) || l.method.toLowerCase().includes(filter.toLowerCase()))
    : logs;
  return (
    <div className="logs-root content-area">
      <h2>Activity Logs</h2>
      <div className="logs-filterpanel">
        <input
          className="logs-filterinput"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter by endpoint or method"
        />
        <button
          className="cta-button"
          style={{ marginLeft: 14 }}
          onClick={() => alert("Simulate backend error")}
        >
          Simulate Error
        </button>
      </div>
      <table className="logs-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Endpoint</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((l, idx) => (
            <tr key={idx} className={l.code >= 400 ? "logs-error" : ""}>
              <td>{l.ts}</td>
              <td>{l.path}</td>
              <td>{l.method}</td>
              <td>{l.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#5e35b1" }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
