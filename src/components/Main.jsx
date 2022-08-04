import './Main.css';
import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const dateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('-');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate <= filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate >= filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};

export default function Main() {
  const [gridApi, setGridApi] = useState()
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const rowData = [
    { name: "Aryan",date: "09-08-2022" },
    { name: "Nikita", date: "11-08-2022" },
    { name: "Saloni",  date: "10-08-2022" },
    { name: "Nehal", date: "12-08-2022" }
  ];

  const columns = [{ headerName: "name", field: "name" },
  { headerName: "Date", field: "date", filter: 'agDateColumnFilter', filterParams: dateFilterParams, }
  ]
  const defColumnDefs = { flex: 1, }

  const onGridReady = (params) => {
    setGridApi(params)
  }
  const getFilterType = () => {
    if (startDate !== '' && endDate !== '') return 'inRange';
    else if (startDate !== '') return 'greaterThan'
    else if (endDate !== '') return 'lessThan'
  };
  useEffect(() => {
    if (gridApi) {
      if (startDate !== '' && endDate !== '' && startDate > endDate) {
        alert("Start Date should be before End Date")
        setEndDate('')
      } else {
        var dateFilterComponent = gridApi.api.getFilterInstance('date');
        dateFilterComponent.setModel({
          type: getFilterType(),
          dateFrom: startDate ? startDate : endDate,
          dateTo: endDate,
        });
        gridApi.api.onFilterChanged();
      }

    }

  }, [startDate, endDate])
  return (
    <div className="App">
      <h2 align="center">Employee List</h2>
      
      <div className="ag-theme-alpine" style={{ height: 400 }}>
        From : <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        To : <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} style={{marginBottom: 30}} />
        
        <AgGridReact
          rowData={rowData}
          columnDefs={columns}
          defaultColDef={defColumnDefs}
          onGridReady={onGridReady} />
      </div>
    </div>
  );
}




