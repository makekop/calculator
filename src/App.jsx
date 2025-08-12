import { useState } from "react";
import "./App.css";

function App() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState(null);
    const [result, setResult] = useState(null);

    const pressNum = (digit) => {
        if (operator === null) {
            setNum1((prev) => prev + digit);
        } else {
            setNum2((prev) => prev + digit);
        }
    };

    const chooseOperator = (op) => {
        setOperator(op);
    };

    const calculate = () => {
        const a = Number(num1);
        const b = Number(num2);
        let res = null;

        if (operator === "+") res = a + b;

        setResult(res);
    };

    return (
        <>
            <h1>
                {" "}
                {num1} {operator} {num2}
            </h1>
            <div>
                <button onClick={() => pressNum("1")}>1</button>
                <button onClick={() => pressNum("2")}>2</button>
            </div>
            <div>
                <button onClick={() => chooseOperator("+")}>+</button>
            </div>
            <div>
                <button onClick={() => calculate()}>=</button>
            </div>
            <div>{result !== null && <h1>Result: {result}</h1>}</div>
        </>
    );
}

export default App;
