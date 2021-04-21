import React from 'react';
import Sidenav from '../SideNav/Sidenav';
import { Box, Container } from '@material-ui/core';
import Copyright from '../Footer/Footer';
import CardView from './CardView';
import { useStyles } from '../Styles';

export default function History() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Sidenav />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <CardView />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>


  );
}
