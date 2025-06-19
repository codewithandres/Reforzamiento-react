import { useState } from 'react';
import Expensive from './ExpresiveComponent';

export const Example03useMemo = () => {
  const [text, setText] = useState('');

  console.log('Rendering Example03useMemo');

  return (
    <div className='wrapper'>
      <input
        type='text'
        placeholder='Enter Text '
        onChange={({ target }) => setText(target.value)}
      />
      <Expensive />
    </div>
  );
};
