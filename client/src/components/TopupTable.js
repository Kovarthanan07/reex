import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'status', headerName: 'Status', width: 160 },
  { field: 'date', headerName: 'DATE', width: 150 },
  { field: 'firstName', headerName: 'Emploee Name', width: 160 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 130,
  },
];

const rows = [
  { id:1 , status: 'Approved' , date: '01-05-2020',  firstName: 'Jon', amount: 35 },
  { id:2 , status: 'Declined' ,  date: '02-05-2020',  firstName: 'Cersei', amount: 42 },
  { id:3 , status: 'Approved' ,  date: '03-05-2020',  firstName: 'Jaime', amount: 45 },
  { id:4 , status: 'Declined' ,  date: '04-05-2020',  firstName: 'Arya', amount: 16 },
  { id:5 , status: 'Approved' ,  date: '05-05-2020',  firstName: 'Daenerys', amount: null },
  { id:6 , status: 'Approved' ,  date: '06-05-2020',  firstName: null, amount: 150 },
  { id:7 , status: 'Approved' ,  date: '07-05-2020',  firstName: 'Ferrara', amount: 44 },
  { id:8 , status: 'Declined' ,  date: '08-05-2020',  firstName: 'Rossini', amount: 36 },
  { id:9 , status: 'Declined' ,  date: '09-05-2020',  firstName: 'Harvey', amount: 65 },
];

export default function TopupTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Topup-Request History</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
