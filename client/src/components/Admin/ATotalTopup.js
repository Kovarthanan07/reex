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

export default function ATotalTopup(props) {
  // const classes = useStyles();
  const { topups } = props;

  let topupsCopy = [];
  let pending = [];
  let approved = [];
  let rejected = [];
  let totalTopupAmount = 0;

//   if (topups) {
//     topupsCopy = topups;

//     pending = topups.filter((topup) => {
//       return topup.status === 'Pending';
//     });

//     approved = topups.filter((topup) => {
//       return topup.status === 'Approved';
//     });

//     rejected = topups.filter((topup) => {
//       return topup.status === 'Rejected';
//     });

//     topups.map((topup) => {
//       totalTopupAmount += topup.amount;
//     });
//   }

  return (
    <div>
      <Title>Topups</Title>
      <hr/>
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6" style={{fontWeight:"bold"}}>
            Topups(Rs.):
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            1,500
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6" style={{fontWeight:"bold"}}>
            Total(Number):
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            11
          </Typography>
        </Col>
      </Row>
      <br />
      <Typography>
        <Row>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff6600' }}>Pending: 5</span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#00b300' }}>
              Accepted: 4
            </span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff0000' }}>
              Rejected: 2
            </span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Typography color="textSecondary">
        until: {new Date().toDateString()}
      </Typography>
    </div>
  );
}
