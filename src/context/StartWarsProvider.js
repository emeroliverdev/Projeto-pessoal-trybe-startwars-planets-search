import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [selectFilterNumber, setSelectFilterNumber] = useState({
    column: 'population', comparison: 'maior que', value: 0,
  });
  const [filteredData, setFilteredData] = useState([]);
  const [optionsSelect, setOptionsSelect] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const fetchStartWars = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const resquestJson = await request.json();
    const { results } = resquestJson;
    setData(results);
    setFilteredData(results);
  };

  const contextValue = {
    data,
    searchName,
    filterByNumericValues,
    selectFilterNumber,
    filteredData,
    optionsSelect,
    setData,
    setSearchName,
    setFilterByNumericValues,
    setSelectFilterNumber,
    setFilteredData,
    setOptionsSelect,
  };

  useEffect(() => {
    fetchStartWars();
    document.title = 'Star Wars - Project';
  }, []);

  return (
    <StartWarsContext.Provider value={ contextValue }>
      { children }
    </StartWarsContext.Provider>
  );
}

StartWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StartWarsProvider;
