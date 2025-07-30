import React from "react";
import "./ResponseValidationPage.css";

// PUBLIC_INTERFACE
export default function ResponseValidationPage({ user }) {
  // Dummy sample
  const testRows = [
    { field: "user.id", mock: 123, actual: 123, status: "OK" },
    { field: "user.email", mock: "foo@bar.com", actual: "bar@baz.com", status: "Mismatch" },
  ];
  return (
    <div className="validation-root content-area">
      <h2>Response Validation</h2>
      <div className="validation-diff">
        {/* This would be replaced by a diff library or custom logic */}
        <pre className="validation-diff-raw">
{`
{
  "user": {
    "id": 123,
    "email": "foo@bar.com"
  }
}
`}
        </pre>
        <pre className="validation-diff-raw">
{`
{
  "user": {
    "id": 123,
    "email": "bar@baz.com"
  }
}
`}
        </pre>
      </div>
      <table className="validation-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Mock Response</th>
            <th>Actual Response</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testRows.map((r, i) => (
            <tr key={i} className={r.status !== "OK" ? "validation-mismatch" : ""}>
              <td>{r.field}</td>
              <td>{String(r.mock)}</td>
              <td>{String(r.actual)}</td>
              <td>{r.status}</td>
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
