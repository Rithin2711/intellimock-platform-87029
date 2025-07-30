import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import FileUploadPage from "./components/FileUpload/FileUploadPage";
import EndpointEditorPage from "./components/EndpointEditor/EndpointEditorPage";
import LLMKeyPage from "./components/LLMKey/LLMKeyPage";
import ResponseValidationPage from "./components/Validation/ResponseValidationPage";
import LogsPage from "./components/Logs/LogsPage";
import AdminPage from "./components/Admin/AdminPage";
import Toasts from "./components/Global/Toasts";
import WebsocketManager from "./components/Global/WebsocketManager";
import { getSession, removeSession, setSession } from "./utils/auth";
import "./App.css";
import "./design-tokens.css";

/**
 * Root application for IntelliMock.
 * Manages routes, session, dark mode, and global notifications.
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState({ message: "", type: null });

  // Check for session on app mount
  useEffect(() => {
    const u = getSession();
    setUser(u);
  }, []);

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  function handleLogin(username, password) {
    // TODO: Replace with backend call
    if (username === "demo" && password === "intellimock") {
      setUser({ username });
      setSession({ username });
      setToast({ message: "Login success!", type: "success" });
    } else {
      setToast({ message: "Invalid username or password.", type: "error" });
    }
  }
  // PUBLIC_INTERFACE
  function handleRegister(username, email, password) {
    // TODO: Replace with backend call
    setUser({ username, email });
    setSession({ username, email });
    setToast({ message: "Registration successful!", type: "success" });
  }
  // PUBLIC_INTERFACE
  function handleLogout() {
    setUser(null);
    removeSession();
    setToast({ message: "Logged out.", type: "info" });
  }
  // PUBLIC_INTERFACE
  function closeToast() {
    setToast({ message: "", type: null });
  }

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        style={{ position: "absolute", right: 20, top: 20, zIndex: 10 }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <Router>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleRegister} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} />} />
              <Route path="/upload" element={<FileUploadPage user={user} />} />
              <Route path="/endpoints" element={<EndpointEditorPage user={user} />} />
              <Route path="/llm-key" element={<LLMKeyPage user={user} />} />
              <Route path="/validation" element={<ResponseValidationPage user={user} />} />
              <Route path="/logs" element={<LogsPage user={user} />} />
              <Route path="/admin" element={<AdminPage user={user} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
      <WebsocketManager user={user} setToast={setToast} />
      <Toasts message={toast.message} type={toast.type} onClose={closeToast} />
    </div>
  );
}

export default App;
