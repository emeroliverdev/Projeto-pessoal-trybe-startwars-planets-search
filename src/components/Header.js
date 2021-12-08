import React, { useContext } from 'react';
import './header.css';
import StartWarsContext from '../context/StartWarsContext';

function Header() {
  const { searchName, setSearchName } = useContext(StartWarsContext);

  function handleChange({ target }) {
    const { value } = target;
    setSearchName({ filterByName: { name: value } });
  }
  return (
    <div className="div-header">
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

export default Header;
