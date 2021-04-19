import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

function ReportSent(props) {
  const { sentReports, allUsers } = props;

  const getReceiverDetails = (id) => {
    const receiver = allUsers.find((m) => m._id === id);
    let details = receiver.userId + ' - ' + receiver.name;
    return details;
  };

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + (month + 1) + '-' + year;
    return correctDate;
  };

  let reportsDetails = [];

  if (sentReports && allUsers) {
    sentReports.map((sentReport) => {
      let data = {
        title: sentReport.title,
        message: sentReport.message,
        receiver: getReceiverDetails(sentReport.receiver),
        sentOn: getDate(sentReport.createdAt),
      };
      reportsDetails.push(data);
    });
  }
  return (
    <React.Fragment>
      {reportsDetails.reverse().map((data) => (
        <React.Fragment>
          <Row>
            <Paper elevation={6}>
              <Col xs={12} sm={12}>
                <CardBody>
                  <CardTitle className=" mb-3" tag="h5">
                    {data.title}
                  </CardTitle>
                  <hr />
                  <CardText>
                    <span>To : {data.receiver}</span>
                    <br />
                    <span>Sent On : {data.sentOn}</span>
                  </CardText>
                  <CardText>{data.message}</CardText>
                </CardBody>
              </Col>
              <Row style={{padding:10}}>
                <Col xs={10} sm={10}></Col>
                <Col xs={10} sm={2}>
                <Button color="danger">Delete</Button>
                </Col>
              </Row>
            </Paper>
          </Row>
          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default ReportSent;
