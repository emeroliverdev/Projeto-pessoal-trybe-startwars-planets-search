import React from 'react';
import FilterByNumber from './FilterByNumber';
import SearchName from './SearchName';
import './filters.css';

function Filters() {
  return (
    <div className="div-filters">
      <SearchName />
      <FilterByNumber />
    </div>
  );
}

export default Filters;
