import { useReducer, useRef } from 'react';
import { formReducer } from './formReducer';
import { INITIAL_STATE } from './postReducer';

export const Example01useReducer = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const tagRef = useRef();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: 'CHANGE_INPUT', payload: { name, value } });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(',');

    tags.forEach(tag => {
      dispatch({ type: 'ADD_TAG', payload: tag });
    });
  };

  console.log(state);

  return (
    <div>
      <form>
        <input type='text' placeholder='Title' onChange={handleChange} name='title' />
        <input type='text' placeholder='Desc' onChange={handleChange} name='desc' />
        <input type='number' placeholder='Price' onChange={handleChange} name='price' />
        <p>Category:</p>
        <select onChange={handleChange} name='category'>
          <option value='sneakers'>Sneakers</option>
          <option value='tshirts'>T-shirts</option>
          <option value='jeans'>Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea ref={tagRef} placeholder='Seperate tags with commas...'></textarea>
        <button onClick={handleTags} type='button'>
          Add Tags
        </button>
        <div className='tags'>
          {state.tags.map(tag => (
            <small
              onClick={() => dispatch({ type: 'REMOVE_TAG', payload: tag })}
              key={tag}>
              {tag}
            </small>
          ))}
        </div>
        <div className='quantity'>
          <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY' })} type='button'>
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY' })} type='button'>
            +
          </button>
        </div>
      </form>
    </div>
  );
};
