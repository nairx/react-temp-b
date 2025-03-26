import React from "react";
import { useState, useEffect } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");

  const handleRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMsg("Well Done!");
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
    } else {
      setMsg("Game Over");
    }
  };
  return (
    <div className="App-App10-Container">
      <h3>This is App10</h3>
      <div className="App-App10-Row">
        <div className="App-App10-Box">
          <button onClick={handleRun}>Run</button>
          <p>{run}</p>
        </div>
        <div className="App-App10-Box">
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App-App10-Row">
        <div className="App-App10-Box"> {msg}</div>
      </div>
    </div>
  );
}
