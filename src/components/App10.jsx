import React from "react";
import { useState, useRef } from "react";
import "./App10.css";
export default function App10() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [msg, setMsg] = useState("Let's begin the game!");
  const runRef = useRef();
  const wicketRef = useRef();
  const msgRef = useRef();
  const handleRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMsg("Well Done!");
      runRef.current.style.backgroundColor = "teal";
      wicketRef.current.style.transform = "scale(1)";
      runRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "white";
    }
  };

  const handleWicket = () => {
    wicket < 10 && setWicket(wicket + 1);
    if (wicket < 9) {
      setMsg("Better luck next time!");
      runRef.current.style.backgroundColor = "white";
      runRef.current.style.transform = "scale(1)";
      wicketRef.current.style.transform = "scale(1.1)";
      wicketRef.current.style.backgroundColor = "red";
    } else {
      setMsg("Game Over");
      msgRef.current.style.backgroundColor = "yellow";
      runRef.current.style.backgroundColor = "white";
      wicketRef.current.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App-App10-Container">
      <h3>This is App10</h3>
      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={runRef}>
          <button onClick={handleRun}>Run</button>
          <p>{run}</p>
        </div>
        <div className="App-App10-Box" ref={wicketRef}>
          <button onClick={handleWicket}>Wicket</button>
          <p>{wicket}</p>
        </div>
      </div>
      <hr></hr>
      <div className="App-App10-Row">
        <div className="App-App10-Box" ref={msgRef}>
          {" "}
          {msg}
        </div>
      </div>
    </div>
  );
}
