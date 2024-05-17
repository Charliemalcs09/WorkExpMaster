import React from 'react';
import data from './data.json';
import DataItem from './DataItem';


function DataTableList({ sort, direction }) {

  function getSortedList() {
    return data.sort(function (a, b) {
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

  }

  return (
    <div>
      {getSortedList().map((e) => {
        return (
          <DataItem product={e} />
        );
      })}
    </div>
  )
}

export default DataTableList; 