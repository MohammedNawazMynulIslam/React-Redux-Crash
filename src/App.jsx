import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch({
      type: "INC",
    });
  };
  const decrement = () => {
    dispatch({
      type: "DEC",
    });
  };
  return (
    <>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
