import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

import Home from './pages/Home';

const App = () => {
  return (
    <Container fluid className="App">
      <Home />
    </Container>
  );
};

export default App;
