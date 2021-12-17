import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';
import './filterByNumber.css';

function FilterByNumber() {
  const {
    setFilterByNumericValues, selectFilterNumber, setSelectFilterNumber,
    filteredData, setData, optionsSelect, setOptionsSelect, filterByNumericValues,
  } = useContext(StartWarsContext);

  function handleChange({ target }) {
    const { name, value } = target;
    setSelectFilterNumber({ ...selectFilterNumber, [name]: value });
  }

  function btnFilterByNumber() {
    setFilterByNumericValues([...filterByNumericValues, selectFilterNumber]);

    let filterNumericData = [];
    switch (selectFilterNumber.comparison) {
    case 'maior que': filterNumericData = filteredData.filter((element) => (
      element[selectFilterNumber.column] > Number(selectFilterNumber.value)));
      break;

    case 'menor que': filterNumericData = filteredData.filter((element) => (
      element[selectFilterNumber.column] < Number(selectFilterNumber.value)));
      break;

    case 'igual a': filterNumericData = filteredData.filter((element) => (
      element[selectFilterNumber.column] === selectFilterNumber.value));
      break;

    default: return true;
    }
    setData(filterNumericData);
    setOptionsSelect(optionsSelect
      .filter((element) => element !== selectFilterNumber.column));
  }

  const selectComparison = ['maior que', 'menor que', 'igual a'];

  return (
    <div className="select-filter">
      <select
        data-testid="column-filter"
        value={ selectFilterNumber.column }
        onChange={ handleChange }
        name="column"
        className="input-column"
      >
        { optionsSelect.map((element) => (
          <option key={ element }>{ element }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ selectFilterNumber.comparison }
        onChange={ handleChange }
        name="comparison"
        className="input-comparison"
      >
        { selectComparison.map((element) => (
          <option key={ element }>{ element }</option>
        )) }
      </select>
      <div className="value-filter">
        <input
          data-testid="value-filter"
          type="number"
          value={ selectFilterNumber.value }
          onChange={ handleChange }
          name="value"
          className="input-value"
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ btnFilterByNumber }
          className="btn-filter"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default FilterByNumber;
