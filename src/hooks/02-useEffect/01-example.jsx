import { useEffect, useState } from 'react';

const Exmaple01useEffect = () => {
  const [number, setNumber] = useState(0);
  //   const [name, setName] = useState('');

  console.log('Component Render..!');

  useEffect(() => {
    console.count('useEffect Runs.!');
    document.title = `Tile of de page `;
  }, []);

  return (
    <>
      <span> You Clicket {number} Times </span>
      <button onClick={() => setNumber(prevState => prevState + 1)}> Increment</button>
      {/* <input type='text' onChange={event => setName(event.target.value)} /> */}
    </>
  );
};

export { Exmaple01useEffect };
