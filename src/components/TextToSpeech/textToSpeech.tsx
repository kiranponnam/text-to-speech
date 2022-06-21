import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import "./textToSpeech.css";

const TextToSpeech = (pros: any) => {
  const [text, setText] = useState<string>("");
  const textHandler = (e: any) => {
    setText(e.target.value);
  };
  const speakHandler = () => {
    let utter = new SpeechSynthesisUtterance();
    utter.lang = "en";
    utter.text = text;
    window.speechSynthesis.speak(utter);
  };
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    var voices = speechSynthesis.getVoices();

    for (var i = 0; i < voices.length; i++) {
      var option = document.createElement("option");
      option.textContent = voices[i].name + " (" + voices[i].lang + ")";

      if (voices[i].default) {
        option.textContent += "-- DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document?.getElementById("voiceSelect")?.appendChild(option);
    }
  }
  useEffect(()=>{
  populateVoiceList();
  },[])
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  return (
    <React.Fragment>
      <br />
      <header>
        <b className="text-to-speech">Text To Speech</b>
      </header>
      <br />
      <div className="main-text-container">
        <b>Select Voice</b>
        <select id="voiceSelect" className="voice-select-container"></select>
        <TextareaAutosize
          onChange={(e: any) => textHandler(e)}
          minRows={4}
          placeholder="Enter your text"
          className="input-text"
          style={{ width: "341px" }}
        />
        <br />
        <div>
          <Button
            onClick={() => speakHandler()}
            variant="contained"
            style={{ margin: "2px" }}
            color="success"
          >
            Speak
          </Button>
          <Button
            onClick={() => window.speechSynthesis.pause()}
            variant="contained"
            style={{ margin: "2px" }}
            color="warning"
          >
            Pause
          </Button>
          <Button
            onClick={() => window.speechSynthesis.resume()}
            variant="contained"
            style={{ margin: "2px" }}
            color="info"
          >
            Resume
          </Button>
          <Button
            onClick={() => window.speechSynthesis.cancel()}
            variant="contained"
            style={{ margin: "2px" }}
            color="error"
          >
            Cancel
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TextToSpeech;
