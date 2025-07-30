import { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
/**
 * Connects to backend via WebSocket for live updates.
 * Invokes setToast for toast notifications when relevant events occur.
 */
export default function WebsocketManager({ user, setToast }) {
  const wsRef = useRef();

  useEffect(() => {
    if (!user) return;
    let ws = new window.WebSocket("ws://localhost:8765/ws"); // TODO: update to actual prod endpoint
    wsRef.current = ws;

    ws.onopen = () => setToast && setToast({ message: "Live updates enabled.", type: "info" });
    ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data?.notification) {
          setToast && setToast({ message: data.notification, type: "info" });
        }
      } catch { /* ignore */ }
    };
    ws.onerror = () => setToast && setToast({ message: "Websocket error", type: "error" });
    ws.onclose = () => setToast && setToast({ message: "Live connection closed.", type: "info" });

    return () => {
      ws && ws.close();
    };
  }, [user, setToast]);

  return null;
}
