import { useState, useEffect } from "react";

const FunctionalComp = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <h1>Functional Component</h1>

      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>

      <h2>{timer}</h2>
    </div>
  );
};

export default FunctionalComp;
