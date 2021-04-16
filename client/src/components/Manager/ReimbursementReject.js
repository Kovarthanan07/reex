import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ManagerReimburseDetail from './ManagerReimburseDetail';
import { Button } from 'reactstrap';

export default function ReimbursementReject(props) {
  const [rows, setRows] = useState();
  const [rowSelected, setRowSelected] = useState(false);
  const {
    employees,
    reimbursements,
    transactions,
    allBankDetails,
    managers,
  } = props;

  const columns = [
    { field: 'createdDate', headerName: 'Created Date', width: 150 },
    { field: 'employeeName', headerName: 'Employee Name', width: 180 },
    { field: 'employeeId', headerName: 'Employee Id', width: 130, hide: true },
    { field: 'id', headerName: 'Id', width: 130, hide: true },
    {
      field: 'reimbursementAccount',
      headerName: 'reimbursementAccount',
      width: 130,
      hide: true,
    },
    { field: 'status', headerName: 'status', width: 130, hide: true },
    {
      field: 'managerName',
      headerName: 'manager name',
      width: 130,
      hide: true,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
    },
    { field: 'updatedDate', headerName: 'Updated Date', width: 160 },
    { field: 'transactionId', hide: true, headerName: 'Status', width: 160 },
    // { field: 'createdDate', headerName: 'Created Date', width: 150 },
    // { field: 'employeeName', headerName: 'Employee Name Name', width: 130 },
    // {
    //   field: 'bankDetails',
    //   headerName: 'Bank Details',
    //   width: 160,
    //   hide: true,
    // },
    // {
    //   field: 'amount',
    //   headerName: 'Amount',
    //   width: 130,
    // },
    // { field: 'updatedDate', headerName: 'Updated Date', width: 160 },
    // { field: 'status', headerName: 'Status', width: 160 },
    // { field: 'transactionId', hide: true, headerName: 'Status', width: 160 },
    {
      field: '',
      width: 160,
      headerName: '',
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== '__check__' && !!c);
          const thisRow = {};

          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          setRows(thisRow);
          return setRowSelected(true);
        };

        return <Button onClick={onClick}>View More</Button>;
      },
    },
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

  const details = [];
  if (reimbursements && employees) {
    reimbursements.reverse().map((reimbursement) => {
      if (reimbursement.status === 'Cancelled') {
        const data = {
          id: reimbursement._id,
          createdDate: getDate(reimbursement.createdAt),
          employeeName: getEmployeeName(reimbursement.reimbursementTo),
          amount: reimbursement.amount,
          status: reimbursement.status,
          bankDetails: reimbursement.reimbursementAccount,
          updatedDate: getDate(reimbursement.updatedAt),
          transactionId: reimbursement.transactionId,
          employeeId: reimbursement.reimbursementTo,
          // managerName: getManagerName(reimbursement.reimbursementBy),
          reimbursementAccount: reimbursement.reimbursementAccount,
        };
        details.push(data);
      }
    });
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      {rowSelected ? (
        <ManagerReimburseDetail
          rowData={rows}
          transactions={transactions}
          allBankDetails={allBankDetails}
        />
      ) : (
        <React.Fragment>
          <h3>Reimbursement Pending</h3>
          <DataGrid rows={details} columns={columns} pageSize={5} />
        </React.Fragment>
      )}
      {/* <h3>Reimbursement Rejected</h3>
      <DataGrid rows={details} columns={columns} pageSize={5} /> */}
    </div>
  );
}
