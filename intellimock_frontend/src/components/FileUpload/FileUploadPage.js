import React, { useState, useRef } from "react";
import "./FileUploadPage.css";

// PUBLIC_INTERFACE
/**
 * Lets users upload API docs, data, or expected response files via drag-and-drop.
 */
export default function FileUploadPage({ user }) {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState("");
  const fileInput = useRef();

  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const dropped = Array.from(e.dataTransfer.files);
    setFiles(dropped);
    setStatus("");
  }
  function handleChange(e) {
    setFiles([...e.target.files]);
  }
  function handleUpload() {
    setStatus(`Uploading ${files.length} file(s)...`);
    setTimeout(() => setStatus("Uploaded!"), 1000); // TODO: backend hook
  }
  return (
    <div className="fileupload-root content-area">
      <h2>Upload Files</h2>
      <div
        className="fileupload-drop"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        tabIndex={0}
      >
        Drag &amp; drop files here, or{" "}
        <button
          onClick={() => fileInput.current?.click()}
          type="button"
          className="cta-button"
        >
          Browse
        </button>
        <input
          ref={fileInput}
          type="file"
          style={{ display: "none" }}
          multiple
          accept=".json,.yaml,.yml"
          onChange={handleChange}
        />
      </div>
      <ul className="fileupload-list">
        {files.map((file) => (
          <li key={file.name}>{file.name} ({file.size} bytes)</li>
        ))}
      </ul>
      <button
        className="cta-button"
        style={{ marginTop: 16 }}
        disabled={!files.length}
        onClick={handleUpload}
      >
        Upload
      </button>
      {status && <div className="upload-status">{status}</div>}
      <div style={{ marginTop: 40 }}>
        <a href="/" style={{ color: "#5e35b1" }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
