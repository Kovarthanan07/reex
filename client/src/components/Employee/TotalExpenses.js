import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Deposits() {
  // const classes = useStyles();
  return (
    <div>
      <Title>Expenses</Title>
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            Expenses(Rs.):
      </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            3,024.00
      </Typography>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
        <Typography component="p" variant="h6">
        Total(Number): 
      </Typography>
        </Col>
        <Col xs={12} sm={6}>
        <Typography component="p" variant="h6">
         50
      </Typography>
        </Col>
      </Row>
      <br />
      <Typography>
        <Row>
          <Col xs={12} sm={4}>
            <span style={{ color: "#ff6600" }}>Pending: 30</span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: "#00b300" }}>Accepted: 15</span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: "#ff0000" }}>Rejected: 5</span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Typography color="textSecondary">
        until: {new Date().toDateString()}
      </Typography>
      <Link style={{ textDecoration: "none" }} to="/History">SeeMore</Link>
    </div>
  );
}