import React from "react";
import "./ControlButtons.css";

function ZoomButton({ Aumentar, Diminuir }) {
  return (
    <div className="Control-group">
      <p className="icon-label">Zoom</p>
      <div className="controls">
        <button
          className="controls-btn"
          onClick={Diminuir}
          title="Fechar zoom"
        >
          <span>−</span>
        </button>

        <div className="icons-wrapper" title="zoom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>

        <button
          className="controls-btn"
          onClick={Aumentar}
          title="Abrir zoom"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default ZoomButton;
