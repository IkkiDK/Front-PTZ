import React from "react";
import "./App.css";

import CameraView from "./components/CameraView/CameraView";
import PTZControls from "./components/JoyStick/PTZControls";
import ZoomButton from "./components/GeneralButtons/ZoomButton";
import FocusButton from "./components/GeneralButtons/FocusButton";
import IrisButton from "./components/GeneralButtons/IrisButton";
import HomeButton from "./components/GeneralButtons/HomeButton";
import { enviarComandoPTZ } from "./utils/enviarComandoPTZ";

const camera = "Camera1";
const usuario = "admin";
const senha = "1234";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <div style={{ flex: 1, padding: "20px" }}>
        <CameraView />
      </div>

      <div
        style={{
          width: "300px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
          borderLeft: "1px solid #333",
        }}
      >
        <HomeButton
          onClick={() =>
            enviarComandoPTZ({ camera, operacao: "Home", usuario, senha })
          }
        />

        <ZoomButton
          Aumentar={() =>
            enviarComandoPTZ({ camera, operacao: "ZoomTele", usuario, senha })
          }
          Diminuir={() =>
            enviarComandoPTZ({ camera, operacao: "ZoomWide", usuario, senha })
          }
        />

        <FocusButton
          Aumentar={() =>
            enviarComandoPTZ({ camera, operacao: "FocusFar", usuario, senha })
          }
          Diminuir={() =>
            enviarComandoPTZ({ camera, operacao: "FocusNear", usuario, senha })
          }
        />

        <IrisButton
          Aumentar={() =>
            enviarComandoPTZ({ camera, operacao: "IrisOpen", usuario, senha })
          }
          Diminuir={() =>
            enviarComandoPTZ({ camera, operacao: "IrisClose", usuario, senha })
          }
        />
        <PTZControls />
      </div>
    </div>
  );
}

export default App;
