import React, { useEffect } from 'react';
// import axios from 'axios'
import './App.css';
import { StoreProvider } from './utils/GlobalState';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const App = () => {
  useEffect(() => {
    //   // effect
    //   axios.get('/api/date')
    //   .then(res => console.log(res))
    //   return () => {
    //     // cleanup
    //   }
  }, []);

  return (
    <StoreProvider>
      <div className="App">
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </div>
    </StoreProvider>
  );
};

export default App;
