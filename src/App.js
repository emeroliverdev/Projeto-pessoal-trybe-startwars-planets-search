import React from 'react';
import Filters from './components/Filters';
import Table from './components/Table';
import StartWarsProvider from './context/StartWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <Filters />
      <Table />
    </StartWarsProvider>
  );
}

export default App;
