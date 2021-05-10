import React from 'react';
import SignIN1 from '../../assests/SignIN1.jpg';
import SignIN2 from '../../assests/SignIN2.jpg';
import { Typography } from '@material-ui/core';

function SignInHelp() {
    return (
        <div>
            <Typography variant="h6">For sign in, first enter your "User Id" and "Password" then press "LOG IN" button. for future easy login tick "Remember me".</Typography>
            <img width="auto" height="400px" src={SignIN1} alt="" />
            <br />
            <Typography variant="h6">Steps Here</Typography>
            <img width="auto" height="400px" src={SignIN2} alt="" />
        </div>
    )
}

export default SignInHelp;