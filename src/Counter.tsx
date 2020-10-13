import React, { useContext } from "react";
import { DECREMENT, INCREMENT } from "./actions";
import { reduxLiteStore, Store } from "./reduxLite";

type Props = {
  count?: number;
  name?: string;
};

export const Counter = ({ name }: Props) => {
  const store = useContext<Store>(reduxLiteStore);
  const {
    dispatch,
    state: { count },
  } = store;
  return (
    <div>
      <span>{name}</span> Count: {count}
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
