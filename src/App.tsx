import React, { useState, useEffect } from "react";
import "./App.css";
import TextToSpeech from "./components/TextToSpeech/textToSpeech";
import { Button, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState<any>(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "light" : "dark"}>
      <Tooltip title={darkMode ? "light mode" : "dark mode"}>
        <Button
          onClick={toggleDarkMode}
          className="toggle-btn"
          variant="contained"
          style={{ margin: "10px", backgroundColor: "#3f3f3f" }}
        >
          {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </Button>
      </Tooltip>
      <TextToSpeech />
    </div>
  );
}

export default App;
