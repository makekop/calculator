import { useState } from "react";
import "./App.css";

function App() {
    const [list1, setList1] = useState([]);
    const [list2, setList2] = useState([]);
    const [sum, setSum] = useState(null);
    const [activeList, setActiveList] = useState(1);

    const pressNum = (digit) => {
        if (activeList === 1) {
            setList1((prev) => [...prev, digit]);
        } else {
            setList2((prev) => [...prev, digit]);
        }
    };

    const calculateSum = () => {
        const num1 = Number(list1.join(""));
        const num2 = Number(list2.join(""));
        setSum(num1 + num2);
    };
    const clearAll = () => {
        setList1([]);
        setList2([]);
        setSum(null);
    };
    return (
        <div>
            <h2>
                Num1: {list1.join("") || 0}
                {"  "}
                Num2: {list2.join("") || 0}
            </h2>
            <div>
                <button onClick={() => setActiveList(1)}>num1</button>
                <button onClick={() => setActiveList(2)}>num2</button>
            </div>
            <div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
                    <button key={n} onClick={() => pressNum(n.toString())}>
                        {n}
                    </button>
                ))}
            </div>
            <div>
                <button onClick={calculateSum}>+</button>
                <button onClick={clearAll}>C</button>
                <h1>{sum}</h1>
            </div>
        </div>
    );
}

export default App;
