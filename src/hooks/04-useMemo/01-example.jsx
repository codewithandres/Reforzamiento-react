import { useMemo, useState } from 'react';

/**
 * `Example0useMemo` es un componente de React que demuestra el uso del gancho `useMemo`.
 *
 * Incluye dos variables de estado: `text` (cadena) y `number` (número).
 * El estado `text` se actualiza con una entrada de texto, y el estado `number` se actualiza con una entrada de número.
 *
 * La función `expresieFuncction` calcula la suma de números del 0 al `number - 1`.
 * Esta función se memoriza con `useMemo` para evitar recálculos innecesarios cuando el componente se vuelve a renderizar,
 * pero el estado `number` no ha cambiado.
 *
 * El componente muestra el valor actual de `text` y la `sum` calculada.
 *
 * @returns {JSX.Element} Un div que contiene dos entradas y dos pequeños elementos que muestran el texto y la suma.
 */
export const Example0useMemo = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  const expresieFuncction = number => {
    console.log('expresieFunction re-rendered');
    let total = 0;
    for (let i = 0; i < number; i++) total += i;
    return total;
  };

  const sum = useMemo(() => expresieFuncction(number), [number]);

  console.log('component re-rendered');

  return (
    <div className='wrapper'>
      <input
        type='text'
        onChange={({ target }) => setText(target.value)}
        placeholder='Enter text'
      />
      <small>{text}</small>
      <br />
      <input
        type='number'
        onChange={({ target }) => setNumber(target.value)}
        value={number}
      />
      <small> Total : {sum} </small>
    </div>
  );
};
