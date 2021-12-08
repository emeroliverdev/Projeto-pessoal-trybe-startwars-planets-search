import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import StartWarsProvider from './context/StartWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <Header />
      <Table />
    </StartWarsProvider>
  );
}

export default App;
