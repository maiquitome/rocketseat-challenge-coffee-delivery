import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./style";
import { useState } from "react";

export function Counter() {
  const [number, setNumber] = useState(1);

  function handleCounterIncrease() {
    setNumber((prevState) => prevState + 1);
  }
  function handleCounterDecrement() {
    setNumber((prevState) => (prevState > 1 ? prevState - 1 : prevState));
  }

  return (
    <CounterContainer>
      <button onClick={handleCounterDecrement} className="actionIcon">
        <Minus size="0.875rem" />
      </button>
      <span>{number}</span>
      <button onClick={handleCounterIncrease} className="actionIcon">
        <Plus size="0.875rem" />
      </button>
    </CounterContainer>
  );
}
