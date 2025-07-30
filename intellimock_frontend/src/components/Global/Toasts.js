import React, { useEffect } from "react";
import "./Toasts.css";

// PUBLIC_INTERFACE
/**
 * Toasts for global feedback (success, error, info).
 */
export default function Toasts({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className={`toast toast-${type || "default"}`} role="alert">
      <span className="toast-content">{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Close">&times;</button>
    </div>
  );
}
