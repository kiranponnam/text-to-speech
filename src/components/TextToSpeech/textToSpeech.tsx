import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";
import "./textToSpeech.css";
import { Campaign } from "@mui/icons-material";
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
  return (
    <React.Fragment>
      <br />
      <header>
        <b className="text-to-speech">Text To Speech</b>
      </header>
      <br />
      <div className="main-text-container">
        <TextareaAutosize
          onChange={(e: any) => textHandler(e)}
          minRows={4}
          placeholder="Enter your text"
          className="input-text"
          style={{width: "341px"}}
        />
        <br/>
        <div>
        <Button
          onClick={() => speakHandler()}
          variant="contained"
          style={{margin:'2px'}}
          color="success"
        >
          Speak
        </Button>
        <Button
          onClick={() => window.speechSynthesis.pause()}
          variant="contained"
          style={{margin:'2px'}}
          color="warning"
        >
          Pause
        </Button>
        <Button
          onClick={() => window.speechSynthesis.resume()}
          variant="contained"
          style={{margin:'2px'}}
          color="info"
        >
          Resume
        </Button>
        <Button
          onClick={() => window.speechSynthesis.cancel()}
          variant="contained"
          style={{margin:'2px'}}
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
