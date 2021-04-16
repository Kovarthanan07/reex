import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function ReimbursementAccept(props) {
  const { topups, employees } = props;

  const columns = [
    { field: 'createdDate', headerName: 'Created Date', width: 150 },
    { field: 'employeeName', headerName: 'Employee Name Name', width: 130 },
    { field: 'bankDetails', headerName: 'Bank Details', width: 160 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
    },
    { field: 'updatedDate', headerName: 'Updated Date', width: 160 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'transactionId', hide: true, headerName: 'Status', width: 160 },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 150,
    // },
  ];

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + (month + 1) + '-' + year;
    return correctDate;
  };

  const getEmployeeName = (id) => {
    let employee = employees.find((m) => m._id === id);
    return employee.name;
  };

  const getEmployeeId = (id) => {
    let employee = employees.find((m) => m._id === id);
    return employee.userId;
  };

  const rows = [];

  if (topups && employees) {
    const approvedTopups = topups.filter((topup) => {
      return topup.status === 'Approved';
    });

    approvedTopups.reverse().map((approvedTopup) => {
      const data = {
        id: approvedTopup._id,
        createdAt: getDate(approvedTopup.createdAt),
        employeeName: getEmployeeName(approvedTopup.requestBy),
        employeeId: getEmployeeId(approvedTopup.requestBy),
        amount: approvedTopup.amount,
        updatedAt: getDate(approvedTopup.updatedAt),
        // status: approvedTopup.status,
      };
      rows.push(data);
    });
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Reimbursement Accepted</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
