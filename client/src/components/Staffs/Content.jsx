import React, { useEffect, useContext, useState } from 'react';
import StaffCard from './Card';
import { Grid } from '@material-ui/core';
import { GetUsersContext } from '../../context/GetUsersContext';
import SearchIcon from '@material-ui/icons/Search';

const Content = () => {
  const { allUsers, getAllUsers } = useContext(GetUsersContext);
  const [searchItem, setSearchItem] = useState('');

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

  const getStaffCard = (staffObj) => {
    return (
      <Grid item xs={12} md={6} sm={12}>
        <StaffCard {...staffObj} />
      </Grid>
    );
  };

  return (
    <div>
      <div className="staff-search">
        <input
          type="text"
          style={{ backgroundColor: '#fefefe' }}
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        />
        <SearchIcon />
      </div>
      <Grid container spacing={2}>
        {usersDetails
          .filter((value) => {
            if (searchItem === '') {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
              return value;
            }
          })
          .map((staffObj) => getStaffCard(staffObj))}
      </Grid>
    </div>
  );
};

export default Content;
