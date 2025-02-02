import { useReducer } from "react";
import Buttons from "./button";
import { Context, reducer } from "./cart-context";
import Display from "./display";


function ContextUnOptimise() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log("rerendering ===== ", "ContextUnOptimise")
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Display />
      <Buttons />
    </Context.Provider>
  );
}

export default ContextUnOptimise;