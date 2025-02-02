import { useCartContext } from "./cart-context";

const Display = () => {
  const {
    state: { count },
  } = useCartContext();
  console.log("rerendering ===== ", "Display")
  return <span className="span">{count}</span>;
};

export default Display;