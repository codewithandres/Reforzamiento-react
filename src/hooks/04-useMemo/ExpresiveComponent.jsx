import React, { memo } from 'react';

/**
 * Expensive component that performs a heavy calculation and memoizes the result.
 *
 * @returns {JSX.Element} A div containing the text "render".
 */
const Expensive = memo(() => {
  console.log('expensive component rendered!');

  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }
  console.log('Total:', total);
  return <div> render</div>;
});

export default Expensive;
