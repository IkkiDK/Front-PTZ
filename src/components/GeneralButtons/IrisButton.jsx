import React from "react";
import "./ControlButtons.css";

function IrisButton({ Aumentar, Diminuir }) {
  return (
    <div className="controls-group">
      <p className="icon-label">Íris</p>
    <div className="controls">
      <button className="controls-btn" onClick={Diminuir} title="Fechar íris">
        <span>−</span>
      </button>

      <div className="icons-wrapper" title="Íris">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-aperture-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m14.31 8 5.74 9.94" />
          <path d="M9.69 8h11.48" />
          <path d="m7.38 12 5.74-9.94" />
          <path d="M9.69 16 3.95 6.06" />
          <path d="M14.31 16H2.83" />
          <path d="m16.62 12-5.74 9.94" />
        </svg>
      </div>

      <button className="controls-btn" onClick={Aumentar} title="Abrir íris">
        <span>+</span>
      </button>
    </div>
    </div>
  );
}

export default IrisButton;