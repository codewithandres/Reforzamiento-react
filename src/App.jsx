import './App.css' with { type: 'text/css' } ;

import { Example01, Example02,Example03, Example03useEffect, Exmaple01useEffect, Exmaple04, Exmaple04useEffect } from './hooks';
import { Example01useE } from './hooks/02-useEffect/02-example';


const App = () => {
  

  return (
    <>
    {/* -> UseState  */}
      {/* <Example01 /> */}
      {/* <Example02 /> */}
      {/* <Example03 /> */}
      {/* <Exmaple04 /> */}

      {/*-> Use Effect  */}

      {/* <Exmaple01useEffect /> */}
      {/* <Example01useE /> */}
      {/* <Example03useEffect /> */}
      <Exmaple04useEffect />
    </>
  );
};

export default App;
