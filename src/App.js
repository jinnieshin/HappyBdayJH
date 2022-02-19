import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  const handleClick = () => {
    window.location.href = "/first";
  };
  return (
    <div className="container">
      <div className="question">재혁아 생일 축하한다</div>
      <div className="choice-button">
        <button onClick={handleClick}>Thanks</button>
      </div>
    </div>
  );
}

function First() {
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === "210921") {
      window.location.href = "/second";
    } else {
      alert("처음 친해진 날");
    }
  };

  return (
    <div className="container">
      <div className="question">Since?</div>
      <div className="answer-input">
        <input
          className="input"
          type={"number"}
          onChange={onChange}
          value={password}
        ></input>
      </div>
      <div className="choice-button">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

function Second() {
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === "MOOYAHO") {
      window.location.href = "/ending";
    } else {
      alert("Hi I'm Mark Watney");
    }
  };

  return (
    <div className="container">
      <div className="question-paragraph">
        <p>
          우리가 친해진 계기가 뭐일까 생각해 봤는데 역시 이게 가장 크더라ㅋㅋ
        </p>
        <p>
          산골에서 격리중이었는데 이거 덕분 격리가 엄청 빨리 지나간 것 같긴 해?
        </p>
        <p>억까와 억빠를 오가면서 어지럽게 하니까 재밌었지?</p>
        <p>근데 너 이름이 뭐더라</p>
      </div>
      <div className="answer-input">
        <input
          className="input"
          type={"text"}
          onChange={onChange}
          value={password}
        ></input>
      </div>
      <div className="choice-button">
        <button onClick={handleLogin}>submit</button>
      </div>
    </div>
  );
}

function Ending() {
  return (
    <div className="container">
      <div className="ending">
        <p>(생일편지)</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/first">
            <First />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
          <Route path="/ending">
            <Ending />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
