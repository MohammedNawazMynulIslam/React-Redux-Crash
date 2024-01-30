import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./store/index";
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addby = () => {
    dispatch(actions.addby(10));
  };
  return (
    <>
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addby}>Add By Value 10</button>
    </>
  );
}

export default App;
