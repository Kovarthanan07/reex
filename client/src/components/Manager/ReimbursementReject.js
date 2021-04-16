import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function ReimbursementReject(props) {
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
    const notApprovedTopups = topups.filter((topup) => {
      return topup.status === 'Rejected';
    });

    notApprovedTopups.reverse().map((notApprovedTopup) => {
      const data = {
        id: notApprovedTopup._id,
        createdAt: getDate(notApprovedTopup.createdAt),
        employeeName: getEmployeeName(notApprovedTopup.requestBy),
        employeeId: getEmployeeId(notApprovedTopup.requestBy),
        amount: notApprovedTopup.amount,
        updatedAt: getDate(notApprovedTopup.updatedAt),
      };
      rows.push(data);
    });
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Reimbursement Rejected</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
