import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Paper } from '@material-ui/core';
import DefaultProf from './Admin/profImg.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ViewProfileForm = (props) => {
  const { bankDetails } = props;

  const currentUser = JSON.parse(localStorage.getItem('user'));

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + (month + 1) + '-' + year;
    return correctDate;
  };

  let bankDetailCopy = {
    accountNumber: 'Not Available',
    bank: 'Not Available',
    branch: 'Not Available',
  };

  if (bankDetails) {
    bankDetailCopy.accountNumber = bankDetails[0].accountNumber;
    bankDetailCopy.bank = bankDetails[0].bank;
    bankDetailCopy.branch = bankDetails[0].branch;
  }

  return (
    <Row>
      <Col xs={12} sm={4}>
        <Paper Container elevation={4}>
          {currentUser.profilePictureUrl ? (
            <img style={{width:"100%", height:500}} src={currentUser.profilePictureUrl} />
          ) : (
            <img src={DefaultProf} alt="" />
          )}
        </Paper>
      </Col>
      <Col xs={12} sm={8}>
        <div className="container">
          <Paper elevation={4} style={{ padding: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>My Profile</h3>
            <hr />
            <Row>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Name : </span>
                    {currentUser.name}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Email : </span>
                    {currentUser.email}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Date of Birth : </span>
                    {getDate(currentUser.dateOfBirth)}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={3}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>UserID : </span>
                    {currentUser.userId}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={3}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Gender : </span>
                    {currentUser.gender}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={2}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Role : </span>
                    {currentUser.role}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Mobile Number : </span>
                    {currentUser.mobileNumber}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={3}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Joined On : </span>
                    {getDate(currentUser.createdOn)}
                  </label>
                </div>
              </Col>
            </Row>
          </Paper>
          <br />
          <Paper elevation={4} style={{ padding: '20px' }}>
            <h4 style={{ textAlign: 'center' }}>My Bank Details</h4>
            <hr />
            <Row>
              <Col xs={12} sm={6}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Account Number:</span>
                    {bankDetailCopy.length === 0 ? (
                      <p>Not Found</p>
                    ) : (
                      bankDetailCopy.accountNumber
                    )}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Bank Name:</span>
                    {bankDetailCopy.bank}
                  </label>
                </div>
              </Col>
              <Col xs={12} sm={6}>
                <div className="form-group">
                  <label>
                    <span style={{ fontWeight: 'bold' }}>Branch Name:</span>
                    {bankDetailCopy.branch}
                  </label>
                </div>
              </Col>
            </Row>
            <Link
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
              to="/EditProfile"
            >
              {' '}
              Edit Profile <ArrowForwardIcon />
            </Link>
          </Paper>
        </div>
      </Col>
    </Row>
  );
};

export default ViewProfileForm;
