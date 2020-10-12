import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { StoreProvider } from "./utils/GlobalState";

const App = () => {
  // useEffect(() => {
  //   // effect
  //   axios.get('/api/date')
  //   .then(res => console.log(res))

  //   return () => {
  //     // cleanup
  //   }
  // }, [])

  return (
    <StoreProvider>
      <div className="App">
      </div>
    </StoreProvider>
  );
}

export default App;
