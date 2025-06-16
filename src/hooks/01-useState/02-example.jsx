import { useState } from 'react';

//? Se solucionó el problema de la pantalla blanca en React useState
/**
 *? Se solucionó el problema de la pantalla blanca en React useState
 *
 * *useState: Hook para manejar el estado de componentes funcionales.
 *
 * *Problema común: No actualizar el estado correctamente, resultando en "pantalla blanca" o no renderizado.
 *
 * *Solución: Utilizar la función de actualización del estado correctamente, especialmente con objetos y arrays.
 */

export const Example02 = () => {
  /**
   * *input: Estado para almacenar el valor del input.
   * *setinput: Función para actualizar el estado de input.
   */
  const [input, setinput] = useState('');

  /**
   * *user: Estado para almacenar la información del usuario (objeto).
   * *setuser: Función para actualizar el estado de user.
   * *Estructura del objeto user: username (string), email (string), images (array de strings).
   */
  const [user, setuser] = useState({
    username: '',
    email: '',
    images: [
      'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=',
      'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fA%3D%3D',
    ],
  });

  /**
   * *onChangeUsername: Función para actualizar el username del usuario.
   * *Usa setuser para actualizar el estado de user.
   * *prev: Estado anterior de user.
   * *structuredClone: Crea una copia profunda del objeto para evitar mutaciones directas.
   * *...prev: Copia todas las propiedades del estado anterior.
   * *username: input: Actualiza la propiedad username con el valor del input.
   */
  const onChangeUsername = () =>
    setuser(prev => structuredClone({ ...prev, username: input }));

  console.log(user);

  return (
    <>
      {/* Input para cambiar el username */}
      <input onChange={event => setinput(event.target.value)} />
      {/* Botón para ejecutar la función onChangeUsername */}
      <button onClick={onChangeUsername}> change username </button>
      {/* Muestra el username actual */}
      <h3>username is : {user.username} </h3>

      {/* solucion 01 */}
      {/* <h3> username: </h3>
      {user && <span> Username is: {user.name} </span>} */}

      {/* solucion 02 */}
      {/* <p>
        username is: <strong>{user?.name ?? 'anonymous'}</strong>{' '}
      </p> */}

      {/* solucion 03 */}
      {/* <p>
        username is: <strong>{user.images.at(1)}</strong>{' '}
      </p> */}
    </>
  );
};
