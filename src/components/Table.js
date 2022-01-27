import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';
import './table.css';

function Table() {
  const { data, searchName, filterByNumericValues,
    setFilterByNumericValues, optionsSelect, setOptionsSelect, filteredData, setData,
  } = useContext(StartWarsContext);
  const { filterByName } = searchName;
  const { name } = filterByName;

  const planetFilterByName = data.filter((planet) => planet.name.toLowerCase()
    .includes(name.toLowerCase()));

  function deleteFilter({ target }) {
    setOptionsSelect([...optionsSelect, filterByNumericValues[target.id].column]);
    setFilterByNumericValues(
      filterByNumericValues
        .filter((element) => element !== filterByNumericValues[target.id]),
    );
    setData(filteredData);
  }

  return (
    <div>
      { filterByNumericValues.length > 0
        ? (filterByNumericValues.map((element, index) => (
          <div key={ index } className="div-input-bnt">
            <div key={ index } data-testid="filter" className="div-deleted-filter">
              <p>{`${element.column} ${element.comparison} ${element.value}`}</p>
              <button
                type="button"
                id={ index }
                className="btn-deleted-filter"
                onClick={ deleteFilter }
              >
                X
              </button>
            </div>
          </div>
        ))) : ''}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { planetFilterByName.map((element) => (
            <tr key={ element.name }>
              <td>{ element.name }</td>
              <td>{ element.rotation_period }</td>
              <td>{ element.orbital_period }</td>
              <td>{ element.diameter }</td>
              <td>{ element.climate }</td>
              <td>{ element.gravity }</td>
              <td>{ element.terrain }</td>
              <td>{ element.surface_water }</td>
              <td>{ element.population }</td>
              <td>{ element.films }</td>
              <td>{ element.created }</td>
              <td>{ element.edited }</td>
              <td>{ element.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
