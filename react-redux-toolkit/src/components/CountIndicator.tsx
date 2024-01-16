import { useAppSelector } from "../redux/hooks";

const CountIndicator = () => {
    const count = useAppSelector((state) => state.counter.count);
    const box: string[] = [];

    for (let index = 5; index <= count; index += 5) {
        box.push("▩");
    }

    return (
        <div>
            <span className={`${count >= 5 ? "hidden" : "invisible"}`}>▩</span>
            {box}
        </div>
    );
};

export default CountIndicator;
