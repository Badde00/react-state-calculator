import { useState } from "react";
import "./css/App.css"
import ArithmeticPanel from "./ArithmeticPanel"
import NumPanel from "./NumPanel"

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");
  const [sign, setSign] = useState("+");
  const [answer, setAnswer] = useState("0");

  const calculate = () => {
    let result = 0;
    switch (sign) {
      case "+":
        result = parseInt(num1) + parseInt(num2);
        break;
      case "-":
        result = parseInt(num1) - parseInt(num2);
        break;
      case "*":
        result = parseInt(num1) * parseInt(num2);
        break;
      case "÷":
        result = parseInt(num1) / parseInt(num2);
        break;
      default:
        break;
    }
    return result;
  };

  return (
    <div className="calculator">
      <NumPanel num={num1} setNum={setNum1}/>

      <ArithmeticPanel sign={sign} setSign={setSign}/>

      <NumPanel num={num2} setNum={setNum2}/>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => setAnswer(calculate())}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
