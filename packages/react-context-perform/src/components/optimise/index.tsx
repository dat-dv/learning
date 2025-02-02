import Buttons from "./buttons";
import { CartProvider } from "./cart-context";
import Display from "./display";

function ContextOptimise() {
  console.log("rerendering ===== ", "ContextOptimise")
  return (
    <CartProvider>
      <Display />
      <Buttons />
    </CartProvider>
  );
}

export default ContextOptimise;