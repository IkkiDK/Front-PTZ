import React from "react";
import "./Switch.css";

function Switch({ state, onChange }) {
  return (
    <div className="control-group">
      <p className="icon-label">Travar câmera</p>
      <label className="switch">
        <input type="checkbox" state={state} onChange={onChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Switch;
