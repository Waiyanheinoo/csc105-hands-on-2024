import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Result from "./component/result/Result";
import Numberinput from "./component/input/Numberinput";
import Operation from "./component/operation/Operation";

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  return (
    <div className="app-container">
      <div className="calculator-box">
        <Header />
        <Result result={result} />
        <Numberinput input={input} setInput={setInput} />
        <Operation
          result={result}
          setResult={setResult}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;