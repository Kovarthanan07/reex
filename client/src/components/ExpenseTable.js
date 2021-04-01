import React, { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { TransactionContext } from '../context/TransactionContext';
import { GetUsersContext } from '../context/GetUsersContext';

export default function ExpenseTable() {
  const columns = [
    { field: 'submissionDate', headerName: 'Submission Date', width: 161 },
    { field: 'managerName', headerName: 'Manager Name', width: 151 },
    { field: 'category', headerName: 'Category', width: 110 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 160 },
    { field: 'transactionDate', headerName: 'Transaction Date', width: 161 },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    // {
    //   field: "",
    //   headerName: "View Receipt",
    //   sortable: false,
    //   width: 100,
    //   disableClickEventBubbling: true,
    //   renderCell: () => {
    //     const onClick = () => {

    //     return <Button onClick={onClick}>Click</Button>;
    //   }
    // },
  ];

  const [transactions, getEmployeeTransactions] = useContext(
    TransactionContext
  );

  const [getManagers, managers] = useContext(GetUsersContext);

  useEffect(() => {
    getManagers();
  }, []);

  useEffect(() => {
    console.log('Manager : ', managers);
  }, [managers]);

  useEffect(() => {
    getEmployeeTransactions();
  }, []);

  useEffect(() => {
    console.log('Transactions : ', transactions);
  }, [transactions]);

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const s = date + '-' + month + '-' + year;
    return s;
  };

  const getManagerName = (id) => {
    let manager = managers.find((m) => m._id === id);
    return manager.name;
  };

  const trialData = [];
  const [rows, setRows] = useState();

  useEffect(() => {
    if (transactions && managers) {
      transactions.map((transaction) => {
        const data = {
          submissionDate: getDate(transaction.createdAt),
          managerName: getManagerName(transaction.managerIncharge),
          category: transaction.category,
          paymentMethod: transaction.paymentMethod,
          transactionDate: getDate(transaction.transactionDate),
          amount: transaction.amount,
          status: transaction.status,
        };
        trialData.push(data);

        // setRows({ ...rows, data });
      });
      console.log('trialData : ', trialData);
    }
  }, [transactions, managers]);

  // useEffect(() => {
  //   setRows(trialData);
  //   console.log('Rows : ', rows);
  // }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Expense History</h3>
      {/* <DataGrid rows={rows} columns={columns} pageSize={5} /> */}
      {/* {rows.length > 0 ? (
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      ) : null} */}
      {/* {rows?.map((row) => {
        console.log(row);
        return <DataGrid rows={row} columns={columns} pageSize={5} />;
      })} */}
      {/* <p> {rows.length} </p> */}
    </div>
  );
}
