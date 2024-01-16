import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="buttons">
                <button onClick={() => setCount((count) => count - 1)}>
                    Decrement ↓
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((count) => count + 1)}>
                    Increment ↑
                </button>
            </div>
        </>
    );
}

export default App;
