import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import { TransactionContext } from '../../context/TransactionContext';
import Title from '../../components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Deposits(props) {
  const { transactions } = props;
  // const { transactions, getEmployeeTransactions } = useContext(
  //   TransactionContext
  // );

  // const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);
  // const [totalExpenseCount, setTotalExpenseCount] = useState(0);
  // const [totalPendingCount, setTotalPendingCount] = useState(0);
  // const [totalApprovedCount, setTotalApprovedCount] = useState(0);
  // const [totalRejectedCount, setTotalRejectedCount] = useState(0);

  // setTotalExpenseCount(transactions.length);
  // useEffect(async () => {
  //   await getEmployeeTransactions();
  // }, []);
  let expenses = [];

  let totalExpense = 0;
  let pending = [];
  let approved = [];
  let rejected = [];
  if (transactions) {
    expenses = transactions;

    pending = transactions.filter((transaction) => {
      return transaction.status === 'Pending';
    });

    approved = transactions.filter((transaction) => {
      return transaction.status === 'Approved';
    });

    rejected = transactions.filter((transaction) => {
      return transaction.status === 'Rejected';
    });

    transactions.map((transaction) => {
      totalExpense += transaction.amount;
    });
    // if (transactions) {
    //   transactions.map((transaction) => {
    //     setTotalExpenseCount(totalExpenseCount + 1);
    //     // setTotalExpenseAmount(totalExpenseAmount + transaction.amount);
    //     // if (transaction.status === 'Pending') {
    //     //   setTotalPendingCount(totalPendingCount + 1);
    //     // } else if (transaction.status === 'Approved') {
    //     //   setTotalApprovedCount(totalApprovedCount + 1);
    //     // } else if (transaction.status === 'Rejected') {
    //     //   setTotalRejectedCount(totalRejectedCount + 1);
    //     // }
    //   });
    // }
  }

  return (
    <div>
      {/* {console.log(transactions)} */}
      <Title>Expenses</Title>
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            Expenses(Rs.):
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {/* 3,024.00 */}
            {/* {totalExpenseAmount} */}
            {totalExpense}
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            Total(Number):
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {/* 50 */}
            {/* {totalExpenseCount} */}
            {expenses.length}
          </Typography>
        </Col>
      </Row>
      <br />
      <Typography>
        <Row>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff6600' }}>Pending: {pending.length}</span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#00b300' }}>
              Accepted: {approved.length}
            </span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff0000' }}>
              Rejected: {rejected.length}
            </span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Typography color="textSecondary">
        until: {new Date().toDateString()}
      </Typography>
      <Link style={{ textDecoration: 'none' }} to="/History">
        SeeMore
      </Link>
    </div>
  );
}
