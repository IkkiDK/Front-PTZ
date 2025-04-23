import React, { useState } from "react";
import Joystick from "./JoyStick";
import Switch from "../GeneralButtons/Switch";
import { enviarComandoPTZ } from "../../utils/enviarComandoPTZ";
import "./PTZControls.css";

const camera = "Digifort";
const usuario = "Digifort";
const senha = "Digifort";

function PTZControls() {
  const [locked, setLocked] = useState(false);
  const threshold = 0.5;

  const handleMove = ({ x, y }) => {
    if (locked) return;

    if (Math.abs(x) < threshold && Math.abs(y) < threshold) {
      console.log("Joystick parado.");
      return;
    }

    let movimento = null;

    if (y < -threshold && x < -threshold) movimento = "MoveUpLeft";
    else if (y < -threshold && x > threshold) movimento = "MoveUpRight";
    else if (y > threshold && x < -threshold) movimento = "MoveDownLeft";
    else if (y > threshold && x > threshold) movimento = "MoveDownRight";
    else if (y < -threshold) movimento = "MoveUp";
    else if (y > threshold) movimento = "MoveDown";
    else if (x < -threshold) movimento = "MoveLeft";
    else if (x > threshold) movimento = "MoveRight";

    if (movimento) {
      enviarComandoPTZ({ camera, operacao: movimento, usuario, senha });
    }
  };

  return (
    <div className="ptz-container">
      <div
        className="ptz-joystick-area"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Joystick onMove={handleMove} />

        <div
          className="ptz-switch"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <Switch
            checked={locked}
            onChange={() => setLocked((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default PTZControls;
