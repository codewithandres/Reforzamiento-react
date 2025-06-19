import { useEffect, useMemo, useState } from 'react';

/**
 * El componente Example02useMemo muestra el uso del gancho useMemo para optimizar el rendimiento.
 * Gestiona información del usuario, como nombre, edad y país, y deriva la información del tipo de usuario (menor de edad/adulto, estadounidense/extranjero) en función de la edad y el país.
 * El gancho useMemo garantiza que el tipo de usuario solo se recálculo cuando cambia la edad o el país, lo que evita rerenderizaciones innecesarias.
 * El gancho useEffect registra un mensaje cuando cambia el tipo de usuario.
 *
 * @returns {JSX.Element} Un elemento JSX que contiene campos de entrada para nombre y edad, y un campo de selección para el país.
 */
export const Example02useMemo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('USA');
  // ? Opción 1: useMemo para calcular el tipo de usuario
  // const useType = useMemo(
  //   () => ({
  //     underAge: age < 18 ? 'underage' : 'adult',
  //     citizen: country === 'USA' ? 'American' : 'Foreigner',
  //   }),
  //   [age, country]
  // );

  // Opción 2: Cálculo directo sin useMemo
  const useType = {
    underAge: age < 18 ? 'underage' : 'adult',
    citizen: country === 'USA' ? 'American' : 'Foreigner',
  };

  useEffect(() => {
    console.log('user type  has changed');
  }, [useType.citizen, useType.underAge]);

  console.log('component rendered');

  console.log({ name, age, country, useType });

  return (
    <div>
      <input onChange={({ target }) => setName(target.value)} placeholder='name' />
      <input
        onChange={({ target }) => setAge(target.value)}
        placeholder='age'
        type='number'
      />
      <select onChange={({ target }) => setCountry(target.value)}>
        <option value='USA'>USA</option>
        <option value='UK'>UK</option>
        <option value='PL'>PL</option>
        <option value='JP'>JP</option>
      </select>
    </div>
  );
};
