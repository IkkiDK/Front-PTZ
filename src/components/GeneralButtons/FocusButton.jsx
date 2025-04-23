import React from "react";
import "./ControlButtons.css";

function FocusButton({ Aumentar, Diminuir }) {
  return (
    <div className="controls-group">
      <p className="icon-label">Foco</p>
      <div className="controls">
        <button
          className="controls-btn"
          onClick={Diminuir}
          title="Fechar foco"
        >
          <span>−</span>
        </button>

        <div className="icons-wrapper" title="foco">
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
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          </svg>
        </div>

        <button
          className="controls-btn"
          onClick={Aumentar}
          title="Abrir foco"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default FocusButton;