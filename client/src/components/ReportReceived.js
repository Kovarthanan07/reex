import React, { useState } from "react";
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
} from "reactstrap";

function ReportReceived(props) {


  return (
    <>
      <Row>
          <Paper elevation={4}>
        <Col xs={12} sm={12}>
          <CardBody>
            <CardTitle className=" mb-3" tag="h5">
              Report Title
          </CardTitle>
          <hr/>
          <CardText>
              <span>From : Vithujan</span>
              <br/>
          </CardText>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure
              repellat, soluta, optio minus ut reiciendis voluptates enim
              impedit veritatis officiis.
          </CardText>
          </CardBody>

        </Col>
        </Paper>
      </Row>
    </>
  );
}

export default ReportReceived;