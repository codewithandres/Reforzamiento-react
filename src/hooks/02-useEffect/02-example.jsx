import { useEffect, useState } from 'react';

export const Example01useE = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState({
    name: '',
    select: false,
  });
  // Solucion sal renderizado de primituvos
  useEffect(() => {
    console.log('The estate has chage, useEffect Runs.!');
  }, [state.name, state.select]);

  const handleAdd = () => setState(prevState => structuredClone({ ...prevState, name }));

  const handleSelect = () =>
    setState(prevState => structuredClone({ ...prevState, select: true }));

  return (
    <div>
      <input type='text' onChange={event => setName(event.target.value)} />
      <button onClick={handleAdd}>add new </button>
      <button onClick={handleSelect}>Selet </button>

      <code>{` { name: ${state.name} selected: ${state.select} }`}</code>
    </div>
  );
};
