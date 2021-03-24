//import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState, Component } from 'react';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Height, LaptopWindowsTwoTone } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LocalGasStation } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import Iconimg from './regi.png';
import LogoImg from './logotwo.png';
// import Header from './header.js';

class SignIn extends Component{

  render(){

  return (
     
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Header /> */}
   
      <div >
        {/* <Avatar className={classes.avatar}>
          <img src={LogoImg} className={classes.icn} />
        </Avatar>  */}
        
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Log in
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item >
              <Link href="#" variant="body2">
                {"Have any trouble"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}
}
export default SignIn;
