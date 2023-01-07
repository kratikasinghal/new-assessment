import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
const AddStudent = () => {
    const [user, setUser] = React.useState({
        name: "",
        rollno: "",
        checkin: "",
        checkout:""
    });
    let name, value;
    const getUserData = (event) => {
        name=event.target.name;
        value= event.target.value;

        setUser({ ...user, [name]: { value } });
    };
    const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <Backdrop
    sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            >
    // onClick={handleClose}
          
            {/* <Button variant="outlined" onClick={handleClose} style={{marginLeft:"50"}}>Close</Button> 
      <AddStudent/>      */}
          
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '41ch' },
      }}
      noValidate
      autoComplete="off"
      >
          


      
          <FormControl style={{backgroundColor:"white"}}>
              <Typography variant="h4" align='center' mt={'2px'}>Add Student Details</Typography>
              <TextField label="Name" style={{marginLeft:"20px",marginRight:"20px",marginTop:"20px"}} 
              onChange={getUserData}
              value={user.name} name="name">Enter the Name:</TextField>
              <TextField label="Roll No" style={{marginLeft:"20px",marginRight:"20px"}} 
              onChange={getUserData}
              value={user.rollno} name="rollno">Enter the Roll no</TextField>
              <TextField label="CheckIn" style={{marginLeft:"20px",marginRight:"20px"}}
              onChange={getUserData}
              value={user.checkin} name="checkin">Enter CheckIn time:</TextField>
              <TextField label="CheckOut" style={{marginLeft:"20px",marginRight:"20px"}}
              onChange={getUserData}
              value={user.checkout} name="checkout">Enter CheckOut time:</TextField>
              <Grid container spacing={0.3}>
                  <Grid item xs={4} style={{marginLeft:"110px",marginTop:"10px",marginBottom:"30px"}}>
                  <Button variant="outlined" color="success">Submit</Button>
                  </Grid>
                  <Grid item xs={4}style={{marginTop:"10px",marginBottom:"30px"}}>
                      <Button variant="outlined" onClick={handleClose}>Close</Button> 
                      </Grid>
              </Grid>
              
          </FormControl>
            </Box>
            </Backdrop>
  )
}

export default AddStudent
