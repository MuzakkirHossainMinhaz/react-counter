import CountIndicator from "./components/CountIndicator";
import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
    const { count } = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <div className="h-screen flex flex-col gap-2 items-center justify-center">
            <div className="border rounded-lg bg-slate-100 p-10 flex items-center justify-center">
                <button
                    onClick={() => dispatch(decrement())}
                    className="btn-outline"
                >
                    Decrement
                </button>
                <span className="text-4xl font-bold mx-6">{count}</span>
                <button onClick={() => dispatch(increment())} className="btn">
                    Increment
                </button>
            </div>
            <CountIndicator />
        </div>
    );
}

export default App;
