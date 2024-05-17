import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';

function DataTableIndividual({ sort, direction }) {

  const [itemNo, setItemNo] = useState(0);

  function nextPage() {
    if (itemNo + 1 < data.length) {
      setItemNo(itemNo + 1);
    }
  }

  function previousPage() {
    if (itemNo - 1 >= 0) {
      setItemNo(itemNo - 1);
    }
  }
  function firstPage() { setItemNo(0); }

  function lastPage() { setItemNo(data.length - 1); }

  function getItem(index) {
    data.sort(function (a, b) {
      let x = typeof a[sort] == "string" ? a[sort].toLowerCase() : a[sort];
      let y = typeof b[sort] == "string" ? b[sort].toLowerCase() : b[sort];

      if (direction) {
        if (x < y) { return -1; }
        if (x > y) { return 1; }
      }

      if (x > y) { return -1; }
      if (x < y) { return 1; }

      return 0;
    });

    return data[index];

  }
  return (<div>
    <DataItem product={getItem(itemNo)} />
    <button onClick={() => firstPage()}>First</button>
    <button onClick={() => previousPage()}>Previous</button>
    <button onClick={() => nextPage()}>Next</button>
    <button onClick={() => lastPage()}>Last</button>

  </div>)
}

export default DataTableIndividual; 