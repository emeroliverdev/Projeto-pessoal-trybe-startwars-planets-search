import React, { useContext } from 'react';
import StartWarsContext from '../context/StartWarsContext';

function FilterByNumber() {
  const {
    setFilterByNumericValues, selectFilterNumber, setSelectFilterNumber,
    filteredData, setData, optionsSelect, setOptionsSelect,
  } = useContext(StartWarsContext);

  console.log(selectFilterNumber);

  function handleChange({ target }) {
    const { name, value } = target;
    setSelectFilterNumber({ ...selectFilterNumber, [name]: value });
  }

  function btnFilterByNumber() {
    setFilterByNumericValues([selectFilterNumber]);

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
    <div>
      <select
        data-testid="column-filter"
        value={ selectFilterNumber.column }
        onChange={ handleChange }
        name="column"
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
      >
        { selectComparison.map((element) => (
          <option key={ element }>{ element }</option>
        )) }
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ selectFilterNumber.value }
        onChange={ handleChange }
        name="value"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ btnFilterByNumber }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterByNumber;
