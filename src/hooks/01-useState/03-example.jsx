import { useState } from 'react';

export const Example03 = () => {
  // Estado inicial del formulario con campos predefinidos.
  const formState = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    country: '',
    city: '',
    addres: '',
  };

  // Usamos el hook useState para manejar el estado del formulario.
  // 'form' contiene los valores actuales del formulario.
  // 'setform' es la función para actualizar el estado del formulario.
  const [form, setform] = useState(formState);

  // Función para manejar los cambios en los inputs del formulario.
  const handleChange = event => {
    // Actualizamos el estado del formulario utilizando la función 'setform'.
    setform(prevState =>
      // Utilizamos 'structuredClone' para crear una copia profunda del estado anterior.
      // Esto asegura que no estamos modificando el estado directamente.
      structuredClone({
        ...prevState, // Copiamos todas las propiedades del estado anterior.
        [event.target.name]: event.target.value, // Actualizamos la propiedad correspondiente al input que cambió.
      })
    );
  };

  console.log(form);

  return (
    <>
      {/* Formulario con campos de entrada y un botón de registro. */}
      <form action='' className='form-register'>
        {/* Cada input tiene un 'name' que corresponde a una propiedad en el estado del formulario. */}
        {/* El evento 'onChange' llama a la función 'handleChange' para actualizar el estado cuando el valor del input cambia. */}
        <input type='text' name='name' onChange={handleChange} placeholder='name' />
        <input type='text' name='surname' onChange={handleChange} placeholder='surname' />
        <input
          type='text'
          name='username'
          onChange={handleChange}
          placeholder='username'
        />
        <input type='text' name='email' onChange={handleChange} placeholder='email' />
        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='password'
        />
        <input type='text' name='country' onChange={handleChange} placeholder='country' />
        <input type='text' name='city' onChange={handleChange} placeholder='city' />
        <input type='text' name='addres' onChange={handleChange} placeholder='addres' />

        {/* Botón de registro. */}
        <button type='submit'>Registrar</button>
      </form>
    </>
  );
};
