import React from "react";
import {Link}   from "react-router-dom";
import Button from '@mui/material/Button';
function Registers () {

    return(
    <>   
    
    
     <h1>register</h1>
     
     <Link to= "/Productlist">Productlist</Link><br/>
     <Link to= "/Login">Login</Link><br/>
     <Link to= "/Cart"><Button variant="contained">Cart</Button></Link>

    
    </>
    )
}
export default Registers;