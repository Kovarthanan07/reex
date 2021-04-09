import { Paper } from '@material-ui/core';
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import Receipt from './Receipt.png';

const EmployeeReimburseDetail = (props) => {
    const onClick = () => {
        window.location.reload()
    }
    var currentUser = JSON.parse(localStorage.getItem('user'));
    return (
        <div>
            <Row>
                <Col xs={12} sm={6}>
                    <button className="btn btn-primary" style={{ width: 100 }} onClick={onClick}>Back</button>
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={12} sm={8}>
                    <Card>
                        <Paper elevation={4}>
                            <CardBody>
                                {currentUser.role==="manager" ? <CardTitle style={{ textAlign: "center", color: "#1278B8" }} tag="h5">Transaction Details</CardTitle>
                                : currentUser.role==="employee" ? <CardTitle style={{ textAlign: "center", color: "#1278B8" }} tag="h5">Expense Details</CardTitle>
                                : null
                                 }
                                
                                <hr />
                                <Row>
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>To :</span> Kovarthanan </CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle> <span style={{ fontWeight: "bold" }}>Transaction Date : </span>25-04-2021</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Status :</span> Pending </CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Amount : </span>5000</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}> Category : </span>Travel</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Payment Method : </span>Cash</CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={12}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Description : </span>Itha pathu Edit panni vidan</CardSubtitle>
                                    </Col>
                                    <br />
                                </Row>
                                {currentUser.role === 'manager' ? (
                                    <Row>
                                    <Col xs={12} sm={6}><button className="btn btn-primary">Accept</button></Col>
                                    <Col xs={12} sm={6}><button className="btn btn-danger">Reject</button></Col>
                                </Row>
                                ) : null}
                            </CardBody>
                        </Paper>
                    </Card>
                    <br />
                    <Card>
                        <Paper elevation={4}>
                            <CardBody>
                                <CardTitle style={{ textAlign: "center", color: "#1278B8" }} tag="h5">Reimbursement Details</CardTitle>
                                <hr />
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Manager Name :</span> Kovarthanan </CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Transaction Id : </span>800004000</CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}>Amount : </span>5000</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle> <span style={{ fontWeight: "bold" }}>Status : </span>Pending</CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle> <span style={{ fontWeight: "bold" }}>Created Date : </span>20-04-2021</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle> <span style={{ fontWeight: "bold" }}>Updated Date : </span>20-04-2021</CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}> Bank Name : </span>BOC</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}> Bank Branch : </span>Colombo</CardSubtitle>
                                    </Col>
                                    <br />
                                    <Col xs={12} sm={2}>

                                    </Col>
                                    <Col xs={12} sm={8}>
                                        <CardSubtitle><span style={{ fontWeight: "bold" }}> Account Number : </span>000245698822</CardSubtitle>
                                    </Col>
                                    <Col xs={12} sm={2}>

                                    </Col>
                                    <br />
                                </Row>
                                {currentUser.role === 'manager' ? (
                                    <Row>
                                        <Col xs={12} sm={6}><button className="btn btn-primary">Accept</button></Col>
                                        <Col xs={12} sm={6}><button className="btn btn-danger">Reject</button></Col>
                                    </Row>
                                ) : null}
                            </CardBody>
                        </Paper>
                    </Card>
                </Col>
                <Col xs={12} sm={4}>
                    <Paper elevation={4}>
                        <CardImg style={{ width: "auto", height: 400 }} top width="100%" src={Receipt} alt="Card image cap" />
                    </Paper>
                </Col>
            </Row>
        </div>
    );
};

export default EmployeeReimburseDetail;