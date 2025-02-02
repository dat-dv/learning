import { useStateContext } from "./cart-context";

const Display = () => {
  const { count } = useStateContext();
  console.log("rerendering ===== ", "Display")
  return <span className="span">{count}</span>;
};

export default Display;