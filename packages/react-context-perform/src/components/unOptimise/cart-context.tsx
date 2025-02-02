import { Dispatch, createContext, useContext } from "react";

type State = {
  count: number;
};

type Action = {
  type: "INCREMENT" | "DECREMENT";
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Provide a valid action.");
  }
}

export type CartContext = {
  state: { count: number };
  dispatch: Dispatch<Action>;
};

export const Context = createContext<CartContext | null>(null);

export function useCartContext() {
    const value = useContext(Context);
  
    if (value === null) {
      throw new Error("Must be wrapped inside Context.Provider");
    }
  
    return value;
  }
  
