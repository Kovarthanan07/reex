import React from 'react';
import Sidenav from '../SideNav/Sidenav';
import {Box,Container} from '@material-ui/core';
import Copyright from '../Footer/Footer';
import EmployeeCardView from './EmployeeCardView';
import {useStyles} from '../Styles';

export default function EmployeeStaff() {
    const classes = useStyles();

  return (

    <div className={classes.root}>
        <Sidenav/>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <EmployeeCardView/>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>

    
  );
}
