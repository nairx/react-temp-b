import React from "react";
import { useState, useEffect } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  useEffect(() => {
    if (run > 0 && wicket < 10) {
      setMsg("Well Done!");
    }
  }, [run]);
  useEffect(() => {
    if (wicket === 10) {
      setMsg("Game Over!");
    } else if (wicket < 9 && wicket > 0) {
      setMsg("Better Luck Next Time");
    } else if (wicket > 10) {
      setWicket(10);
    }
  }, [wicket]);
  return (
    <div className="App-App10-Container">
      <h3>This is App10</h3>
      <div className="App-App10-Row">
        <div className="App-App10-Box">
          <button onClick={() => setRun(run + 1)}>Run</button>
          <p>{run}</p>
        </div>
        <div className="App-App10-Box">
          <button onClick={() => setWicket(wicket + 1)}>Wicket</button>
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
