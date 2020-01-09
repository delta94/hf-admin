import React, { useState, useEffect } from 'react';

export const Chart = () => {
  const initialCount = () => Number(localStorage.getItem('count') || 0);
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);

  useEffect(() => {
    localStorage.setItem('count', String(count));
  }, [count]);

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default Chart;
