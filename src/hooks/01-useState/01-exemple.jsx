import { useState } from 'react';

//? Actualización funcional de useState (¿Por qué useState no se actualiza inmediatamente?)

export const Example01 = () => {
  // Creamos un estado llamado 'number' con valor inicial 0
  const [number, setNumber] = useState(0);

  // Esta función incrementa el estado en 1 de forma síncrona
  // setNumber(number + 1) toma el valor actual de 'number' y le suma 1
  const increase = () => setNumber(number + 1);

  /* Esta función intenta incrementar el estado después de 200ms
   setTimeout ejecuta la función después del retraso
  Aquí hay un problema: 'number' dentro del callback es el valor que tenía cuando se creó la función,
   no el valor actualizado después de otros posibles cambios.
   Si haces clic varias veces rápido, puede que el valor no se incremente correctamente.
   Esto ocurre porque 'number' queda "capturado" (closure) en el valor anterior. */

  // ! Forma Incorrecta x
  //! const increaseAsync = () => setTimeout(() => setNumber(number + 1), 200);

  // ? Forna obtima de actualiar el estado

  const increaseAsync = () =>
    setTimeout(() => setNumber(preNumber => preNumber + 1), 200);

  return (
    <>
      <button onClick={increase}> Increase </button>
      <button onClick={increaseAsync}> Increase async</button>
      <h1> {number} </h1>
    </>
  );
};
