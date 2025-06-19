import { Toaster } from 'react-hot-toast';
import './App.css' with { type: 'text/css' } ;

import { Example01, Example01useReducer, Example02,Example02useReducer,Example03, Example03useEffect, Exmaple01useEffect, Exmaple04, Exmaple04useEffect } from './hooks';
import { Example01useE } from './hooks/02-useEffect/02-example';


const App = () => {
  

  return (
    <>
    <Toaster position="top-center" reverseOrder={true}  />
    {/* -> UseState  */}
      {/* <Example01 /> */}
      {/* <Example02 /> */}
      {/* <Example03 /> */}
      {/* <Exmaple04 /> */}

      {/*-> Use Effect  */}

      {/* <Exmaple01useEffect /> */}
      {/* <Example01useE /> */}
      {/* <Example03useEffect /> */}
      {/* <Exmaple04useEffect /> */}

      {/* useReducer */}
      <Example01useReducer />
      {/* <Example02useReducer /> */}
    </>
  );
};

export default App;
