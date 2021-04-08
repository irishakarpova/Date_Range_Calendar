import { connect } from "react-redux";
import { increment } from "../AC";
function Counter({ counter, increment }) {
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>increment</button>
        </>
    );
}

export default connect(
    (state) => ({
        counter: state.counter
    }),
    { increment }
)(Counter);
