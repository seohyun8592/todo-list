import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [counter, setCounter] = useState(0);
  const countHandler = () => {
    setCounter((prev) => prev + 1);
    onClick();
  };
  return (
    <div className="counter">
      <p className="contenter__num">
        {counter}/<span>{total}</span>
      </p>
      <button onClick={countHandler}>Click!</button>
    </div>
  );
}
