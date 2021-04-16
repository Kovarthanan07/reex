import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GetUsersContext } from '../context/GetUsersContext';
import { SuccessMessage, FailedMessage } from './layouts/Alert';
import DefaultProf from './Admin/profImg.jpg';

const EditProfileForm = (props) => {
  const { selectedUser } = props;
  const [updateStatus, setUpdateStatus] = useState();
  const { reloadUser } = useContext(GetUsersContext);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  let url = '';
  let viewUser = '';
  let user = {
    name: '',
    role: '',
    userId: '',
    _id: '',
  };

  const editedDetails = {};

  if (selectedUser) {
    user.name = selectedUser[0].name;
    user.role = selectedUser[0].role;
    user.userId = selectedUser[0].userId;
    user._id = selectedUser[0]._id;

    url = 'http://localhost:3000/userUpdate/' + user._id;
    viewUser = '/ViewUser/' + user.userId;
  }

  const formik = useFormik({
    initialValues: {
      name: user.name,
      role: user.role,
      userId: user.userId,
    },

    //validate,
    onSubmit: (details) => {
      console.log('submitted');
      if (details.role !== user.role) {
        editedDetails.role = details.role;
      }

      if (details.userId !== user.userId) {
        editedDetails.userId = details.userId;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      axios
        .patch(url, editedDetails, config)
        .then((res) => {
          toast.success('User Update successful');
          reloadUser();
          setUpdateStatus(true);
        })
        .catch((err) => {
          toast.error(err);
          setUpdateStatus(false);
        });
    },
  });

  return (
    <Row>
      {/* <Col xs={12} sm={4}>
                <Paper Container elevation={4}>
                
                    <img src={DefaultProf} alt="" />
                </Paper>
            </Col> */}
            <Col xs={12} sm={2}></Col>
      <Col xs={12} sm={8}>
        <div className="container">
          <Paper elevation={4} style={{ padding: '20px' }}>
            <h3 style={{ textAlign: 'center' }}>Edit {user.name}'s Profile</h3>
            <hr />
            {updateStatus === true ? (
              <SuccessMessage message="Successfully Edited" />
            ) : null}
            {updateStatus === false ? (
              <FailedMessage message="Editing Failed." />
            ) : null}
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <Row>
                <Col xs={12} sm={6}>
                  <div className="form-group">
                    <label>UserID: </label>
                    <input
                      className="form-control"
                      type="text"
                      name="userId"
                      onChange={formik.handleChange}
                      value={formik.values.userId}
                    />
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="form-group">
                    <label>Role:</label>
                    <Input
                      className="form-control"
                      type="select"
                      name="role"
                      onChange={formik.handleChange}
                      value={formik.values.role}
                    >
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </Input>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6}>
                  <button className="btn btn-primary">Confirm</button>
                </Col>
                <Col xs={12} sm={6} style={{ paddingTop: 10 }}>
                  <Row>
                    <Col xs={12} sm={6}></Col>
                    <Col xs={12} sm={6}>
                      <Link style={{ textDecoration: 'none' }} to={viewUser}>
                        <ArrowBackIcon />
                        View User Profile{' '}
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </form>
          </Paper>
        </div>
      </Col>
      <Col xs={12} sm={2}></Col>
    </Row>
  );
};

export default EditProfileForm;
