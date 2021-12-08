import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StartWarsContext from './StartWarsContext';

function StartWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState({
    filterByName: {
      name: '',
    },
  });

  const fetchStartWars = async () => {
    const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const resquestJson = await request.json();
    const { results } = resquestJson;
    setData(results);
  };

  const contextValue = {
    data,
    searchName,
    setData,
    setSearchName,
  };

  useEffect(() => {
    fetchStartWars();
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
