import React from "react";
import "./AdminPage.css";

// PUBLIC_INTERFACE
export default function AdminPage({ user }) {
  // TODO: Demo role check
  const isAdmin = user && user.username === "admin";
  return (
    <div className="admin-root content-area">
      <h2>Admin Dashboard</h2>
      {!isAdmin ? (
        <div>This page is restricted to admin users.</div>
      ) : (
        <>
          <h3>User Management</h3>
          <ul>
            <li>
              <a href="/admin/users">Manage Users</a>
            </li>
            <li>
              <a href="/admin/logs">View Audit Logs</a>
            </li>
            <li>
              <a href="/admin/settings">Platform Settings</a>
            </li>
          </ul>
          <div className="admin-audit">
            <h4>Sample Audit Log:</h4>
            <pre>
{`
admin@2024-06-01T12:41: User 'demo' deleted endpoint /foo
admin@2024-06-01T12:32: Role changed for user 'alice'
`}
            </pre>
          </div>
        </>
      )}
      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#5e35b1" }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
