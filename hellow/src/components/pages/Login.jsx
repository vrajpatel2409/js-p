import React from "react";
import {Link}   from "react-router-dom";
import Registers from "./Registers";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Login(){
return(
    <>
    <h1>login</h1><br />
    <Link to= "/register"><Button color="secondary">Register</Button></Link><br/>
    <Link to= "/productlist"><Button color="secondary">Productlist</Button></Link><br/>
    <Link to= "/login"><Button color="secondary">Login</Button></Link><br/>



  
    </>
)
}
export default Login;