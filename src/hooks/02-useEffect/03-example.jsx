import { useEffect, useState } from 'react';

export const Example03useEffect = () => {
  const [toggle, setToggle] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('Effect Runs..!');
    const interval = setInterval(() => {
      setNumber(prevState => prevState + 1);
    }, 1000);

    // return a clean up function
    return () => {
      clearInterval(interval);
      console.log('What! before the Running Effect, I should clean here!');
    };
  }, []);

  return (
    <div>
      <h3>{number} Clean Time </h3>

      <button onClick={() => setToggle(!toggle)}> Toggle </button>
    </div>
  );
};
