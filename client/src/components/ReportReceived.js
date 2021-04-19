import React, { useState, useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';

function ReportReceived(props) {
  const { receivedReports, allUsers } = props;

  const getSenderDetails = (id) => {
    const sender = allUsers.find((m) => m._id === id);
    if (sender) {
      let details = sender.userId + ' - ' + sender.name;
      return details;
    }
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

  if (receivedReports && allUsers) {
    receivedReports.map((receivedReport) => {
      let data = {
        title: receivedReport.title,
        message: receivedReport.message,
        sender: getSenderDetails(receivedReport.sender),
        receivedOn: getDate(receivedReport.createdAt),
      };
      reportsDetails.push(data);
    });
  }

  return (
    <React.Fragment>
      {reportsDetails.map((data) => (
        <React.Fragment>
          <Row>
            <Paper elevation={4}>
              <Col xs={12} sm={12}>
                <CardBody>
                  <CardTitle className=" mb-3" tag="h5">
                    {data.title}
                  </CardTitle>
                  <hr />
                  <CardText>
                    <span>From : {data.sender}</span>
                    <br />
                    <span>Received On : {data.receivedOn}</span>
                  </CardText>
                  {/* <CardText>
                    <span>Received On : {data.receivedOn}</span>
                    <br />
                  </CardText> */}
                  <CardText>{data.message}</CardText>
                </CardBody>
              </Col>
            </Paper>
          </Row>
          <br />
        </React.Fragment>
      ))}
      {/* {reportsDetails?.map((report) => {
          <p> hello testing</p>;
          // <React.Fragment>
          //   <Row>
              <Paper elevation={4}>
                <Col xs={12} sm={12}>
                  <CardBody>
                    <CardTitle className=" mb-3" tag="h5">
                      {reportsDetails.title}
                    </CardTitle>
                    <hr />
                    <CardText>
                      <span>From : {reportsDetails.sender}</span>
                      <br />
                    </CardText>
                    <CardText>
                      <span>Received On : {reportsDetails.receivedOn}</span>
                      <br />
                    </CardText>
                    <CardText>{reportsDetails.message}</CardText>
                  </CardBody>
                </Col>
              </Paper>
          //   </Row>
          // </React.Fragment>;
      }
      } */}
    </React.Fragment>
  );
}

export default ReportReceived;
