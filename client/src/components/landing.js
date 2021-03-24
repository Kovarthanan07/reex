import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Iconimg from './Login/regi.png';
import Chart from './Login/chart.png';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
full: {
  backgroundColor: '#FFF',
}
}));

export default function Landn() {
  const classes = useStyles();

  return (
     
    
    <div className={classes.full}>
      <Grid container style={{ minHeight: "100vh"}}>
        <Grid item xs={12} sm={6} container xs={12} sm={6} alignItems="center" direction='column' justify='space-between' style={{padding: 10}}>
        <div/>
        <div>
          <Grid container justify='center'>
          <img src={Iconimg} alt="logo" width={250} height={200} style={{marginTop: 40}}  />
        </Grid>
        <div style={{marginBottom: 150}}>
          <p style={{fontSize: 30}}><b>Welcome to</b></p>
          <p style={{fontSize: 30}}><b>Recipt and Expense Managment System</b></p>
          <p style={{fontSize: 25}}>Best palce for managing the expenses!</p>
          <button type="submit"
            fullWidth
            variant="contained"
            color="blue">Log In</button>
            </div>
          </div>
          <div/>
        </Grid>
        
        <Grid container xs={12} sm={6} alignItems="center" direction='column' justify='space-between' style={{padding: 10}}>
        <div/>
        <div>
        <Grid container justify='center'>
         <img src={Chart} alt="logo" width={750} height={600} />
        </Grid>
        </div>
        <div/>
        </Grid>

      </Grid>
    </div>
    
  );
}
