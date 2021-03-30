import React, { useEffect, useState, Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class SignIn extends Component{

  render(){

  return (
     
    <Container component="main" maxWidth="xs">
      <CssBaseline />
   
      <div >
        
        <Typography component="h1" variant="h5" style={{marginTop:100}}>
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
