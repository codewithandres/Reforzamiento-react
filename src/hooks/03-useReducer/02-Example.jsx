import { useReducer } from 'react';

import { ACTION_TYPE } from './post-action.type';

import { INITIAL_STATE, postReducer } from './postReducer';
import toast from 'react-hot-toast';

export const Example02useReducer = () => {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  const fetchPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return response.json();
  };

  const hanldeFetch = async () => {
    dispatch({ type: ACTION_TYPE.FETCH_START });

    try {
      const data = await toast.promise(fetchPost(), {
        loading: 'Cargando datos...',
        success: '¡Datos cargados correctamente!',
        error: 'Error al obtener los datos',
      });
      dispatch({ type: ACTION_TYPE.FETCH_SUCSSES, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: ACTION_TYPE.FETCH_ERROR });
    }
  };

  console.log(state);
  return (
    <>
      <h2> useReducer </h2>
      <button onClick={hanldeFetch}> Fetch Post </button>

      {state.post.id && (
        <section className='card-wrapper '>
          <p className='card-title'> {state.post.title} </p>
        </section>
      )}
    </>
  );
};
