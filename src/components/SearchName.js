import React, { useContext } from 'react';
import './searchName.css';
import StartWarsContext from '../context/StartWarsContext';

function SearchName() {
  const { searchName, setSearchName } = useContext(StartWarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setSearchName({ filterByName: { name: value } });
  }
  return (
    <div className="div-searchName">
      <h3>Projeto Start Wars Planets - Trybe</h3>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Filtrar por nome"
        className="search-name"
        value={ searchName.filterByName.name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default SearchName;
