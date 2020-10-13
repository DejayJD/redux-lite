import React, { Dispatch, ReactNode, useReducer } from "react";
import { DECREMENT, INCREMENT } from "./actions";

const initialState = {
  count: 0,
};

export type StoreState = typeof initialState;
export type CounterAction = { type: typeof INCREMENT | typeof DECREMENT };
export type StoreDispatch = Dispatch<CounterAction>;
export type Store = { state: typeof initialState; dispatch: StoreDispatch };

export const reduxLiteStore = React.createContext<Store>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = reduxLiteStore;

export const LiteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    (state: StoreState, action: CounterAction) => {
      switch (action.type) {
        case INCREMENT:
          return { count: state.count + 1 };
        case DECREMENT:
          return { count: state.count - 1 };
        default:
          throw new Error();
      }
    },
    initialState
  );

  const providerValue = { state, dispatch };
  return <Provider value={providerValue}>{children}</Provider>;
};
