import React, { useState, useEffect, useContext } from 'react';
import CoffeCard from './Card';
import { Grid } from '@material-ui/core';
import { GetUsersContext } from '../../context/GetUsersContext';
import coffeMakerList from './constants';

const Content = () => {
  const { allUsers, getAllUsers } = useContext(GetUsersContext);

  useEffect(async () => {
    await getAllUsers();
  }, []);

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + month + '-' + year;
    return correctDate;
  };

  const usersDetails = [];

  if (allUsers) {
    allUsers.map((user) => {
      const data = {
        name: user.name,
        role: user.role,
        gender: user.gender,
        dateOfBirth: getDate(user.dateOfBirth),
        mobileNumber: user.mobileNumber,
        email: user.email,
        userId: user.userId,
        profilePicture: user.profilePictureUrl,
      };
      usersDetails.push(data);
    });
  }

  const getCoffeMakerCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={6}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <div>
      <Grid container spacing={1}>
        {usersDetails.map((coffeMakerObj) => getCoffeMakerCard(coffeMakerObj))}
      </Grid>
    </div>
  );
};

export default Content;
