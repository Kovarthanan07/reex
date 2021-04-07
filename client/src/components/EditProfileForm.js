import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import DefaultProf from './Admin/profImg.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const EditProfileForm = (props) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            gender: '',
            dateOfBirth: '',
            mobileNumber: '',
            email: '',
            userId: '',
            profileImg: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .email()
                .required("Enter valid Email")
        }),
        // validate,
        onSubmit: (user) => {
            console.log(user);
            axios.post('http://localhost:3000/users', user)
                .then(res => {
                    console.log("Done");
                    toast.success("User Register successful");
                    props.history.push('/user/me');
                })
                .catch(err => {
                    toast.error(err.response.user);
                })
        }
    })

    return (
        <Row>
            <Col xs={12} sm={4}>
                <Paper Container elevation={4}>
                    {/* {profileImg===null?<img src={DefaultProf} alt="" />: <img scr={profileImg}/>} */}
                    <img src={DefaultProf} alt="" />
                </Paper>
            </Col>
            <Col xs={12} sm={8}>
                <div className="container" >
                    <Paper elevation={4} style={{ padding: "20px" }}>
                        <h3 style={{ textAlign: "center" }}>Update Profile</h3>
                        <hr />
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>UserID:(Admin only)</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="userId"
                                            onChange={formik.handleChange}
                                            value={formik.values.userId}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                        {formik.errors.email ?
                                            <div className="text-danger">{formik.errors.email}</div>
                                            : null
                                        }
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="mobileNumber"
                                            onChange={formik.handleChange}
                                            value={formik.values.mobileNumber}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Role:(Admin only)</label>
                                        <Input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="role"
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                        >
                                        </Input>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Gender:</label>
                                        <Select
                                            className="form-control"
                                            type="select"
                                            name="gender"
                                            onChange={formik.handleChange}
                                            value={formik.values.gender}
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Select>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Date of Birth:</label>
                                        <input
                                            className="form-control"
                                            name="dateOfBirth"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.dateOfBirth}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="form-group">
                                        <Label for="receiptImage">Upload Profile Image</Label>
                                        <Input
                                            type="file"
                                            name="profileImg"
                                            onChange={formik.handleChange}
                                            value={formik.values.profileImg}
                                            id="profileImg"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <button className="btn btn-primary">Update Profile</button>
                                </Col>
                                <Col xs={12} sm={6} style={{ paddingTop: 10 }}>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <Link style={{ textDecoration: "none" }} to="/ViewProfile"><ArrowBackIcon />View Profile </Link>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <Link style={{ textDecoration: "none" }} to="/ChangePassword"><ArrowForwardIcon />Change Password </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </Paper>
                </div>
            </Col>
        </Row>
    )

}

export default EditProfileForm;