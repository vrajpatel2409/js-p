import { BrowserRouter,Routes,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/pages/Login';
import Registers from './components/pages/Registers';
import Productlist from './components/pages/Productlist';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Cart from './components//Cart';
import Payment from './components/Payment';

function App() {
  return (
    <>
 
 <h1>welcome everyone</h1><br />
      <img src="" height="1500"/>
     
      <BrowserRouter>
         <Routes>
      
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Registers/>}/>
          <Route path='/Productlist' element={<Productlist/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Payment' element={<Payment/>}/>

      
         </Routes>  
      </BrowserRouter>
      <Stack spacing={2} direction="row">
    
      
    
    </Stack>
    
    </>
    
  );
}

export default App;
