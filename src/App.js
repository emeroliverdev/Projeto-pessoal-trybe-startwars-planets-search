import React from 'react';
import './App.css';
import Table from './components/Table';
import StartWarsProvider from './context/StartWarsProvider';

function App() {
  return (
    <StartWarsProvider>
      <span>Hello, App!</span>
      <Table />
    </StartWarsProvider>
  );
}

export default App;
