import { useDispatchContext } from "./cart-context";

const Buttons = () => {
  const dispatch = useDispatchContext();
  console.log("rerendering ===== ", "Buttons")
  return (
    <div className="buttons">
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        ➖
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        ➕
      </button>
    </div>
  );
};

export default Buttons;

