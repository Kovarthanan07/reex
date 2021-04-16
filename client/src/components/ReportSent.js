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

function ReportSent(props) {
//   const { news } = props;

//   const NewsData = [];

//   const getDate = (realDate) => {
//     const datee = new Date(realDate);
//     const year = datee.getUTCFullYear();
//     const month = datee.getUTCMonth();
//     const date = datee.getUTCDate();
//     const correctDate = date + '-' + month + '-' + year;
//     return correctDate;
//   };

//   if (news) {
//     news.map((data) => {
//       const dataa = {
//         id: data._id,
//         title: data.title,
//         news: data.news,
//         startDisplayOn: new Date(data.startDisplayOn),
//         endDisplayOn: new Date(data.endDisplayOn),
//         viewers: data.viewers,
//         visibleStartOn: getDate(data.startDisplayOn),
//         visibleEndOn: getDate(data.endDisplayOn),
//       };
//       NewsData.push(dataa);
//     });
//   }
//   var currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Row>
          <Paper elevation={4}>
        <Col xs={12} sm={12}>
          <CardBody>
            <CardTitle className=" mb-3" tag="h5">
              Report Title
          </CardTitle>
          <CardText>
              Sender : Vithujan
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

export default ReportSent;