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

function ReadMore({ children, maxCharacterCount = 150 }) {
  const text = children;
  const [isTruncated, setIsTruncated] = useState(true);
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }
  var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <p className="has-text-left">
        {resultString}
        {isTruncated ? "...." : null}
      </p>

      <Row>
        <Col xs={12} sm={10}>
          {text.slice(' ').length > 100 ? <Button color="primary" onClick={toggleIsTruncated} className="tag is-info is-small">
            {isTruncated ? "Read More" : "Read Less"}
          </Button> : null}
        </Col>
        <Col xs={12} sm={2}>
          {currentUser.role === "admin" ?
            <Button
              color="danger"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Delete
            </Button> : null}
        </Col>
      </Row>
    </>
  )

}


function News(props) {
  const { news } = props;

  const NewsData = [];

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + month + '-' + year;
    return correctDate;
  };

  if (news) {
    news.map((data) => {
      const dataa = {
        id: data._id,
        title: data.title,
        news: data.news,
        startDisplayOn: new Date(data.startDisplayOn),
        endDisplayOn: new Date(data.endDisplayOn),
        viewers: data.viewers,
        visibleStartOn: getDate(data.startDisplayOn),
        visibleEndOn: getDate(data.endDisplayOn),
      };
      NewsData.push(dataa);
    });
  }
  var currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <Row>
        <Col xs={12} sm={1}></Col>
        <Col xs={12} sm={10}>
          {NewsData.reverse().map((singleNews) => (
            <>
              
                {(singleNews.startDisplayOn <= new Date() && singleNews.endDisplayOn >= new Date() ) || currentUser.role === 'admin'?
                  <>
                  <Card>
                  <Paper elevation={4}>
                  <CardBody>
                    <CardTitle style={{ textAlign: "center" }} className=" mb-3" tag="h4">
                      {singleNews.title}
                    </CardTitle>
                    {currentUser.role === 'admin' ?
                      <Row>
                        <hr />
                        <Col xs={12} sm={4}>
                          <span>Start Display On : {singleNews.visibleStartOn}</span>
                        </Col>
                        <Col xs={12} sm={4}>
                          <span>End Display On : {singleNews.visibleEndOn}</span>
                        </Col>
                        <Col xs={12} sm={4}>
                          <span>Viewers : {singleNews.viewers}</span>
                        </Col>
                      </Row>
                      : null}
                    <hr />
                    <ReadMore>
                      {singleNews.news}
                    </ReadMore>
                  </CardBody>
                </Paper>
                </Card>
                  </>
                  : null}
              
              <br />
            </>
          ))}
          {/* <CardBody>
            <CardTitle style={{ textAlign: "center" }} className=" mb-3" tag="h3">
              Card title
          </CardTitle>
            <hr />
            <ReadMore>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure
              repellat, soluta, optio minus ut reiciendis voluptates enim
              impedit veritatis officiis.
          </ReadMore>
          </CardBody> */}

        </Col>
        <Col xs={12} sm={1}></Col>
      </Row>
    </>
  );
}

export default News;