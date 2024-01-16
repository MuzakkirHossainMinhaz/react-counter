import { useReducer } from "react";

const initialState = {
    count: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrement = () => {
        dispatch({ type: "increment" });
    };

    const handleDecrement = () => {
        dispatch({ type: "decrement" });
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="border rounded-lg bg-slate-100 p-10 flex items-center justify-center">
                <button onClick={handleDecrement} className="btn-outline">
                    Decrement
                </button>
                <span className="text-4xl font-bold mx-6">{state.count}</span>
                <button onClick={handleIncrement} className="btn">
                    Increment
                </button>
            </div>
        </div>
    );
}

export default App;
