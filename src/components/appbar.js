import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import AddStudent from './addStudent';
import { initialData } from '../students';
import { db } from '../firebase-config';
import { collection, getDocs,addDoc } from 'firebase/firestore';

const Appbar = () => {
  const [users, setUsers] = React.useState([]);
  const usersCollectionRef=collection(db,"users")
  const [newName, setnewName] = React.useState("");
  const [newrollno, setnewrollno] = React.useState("");
  const [newcheckin, setnewcheckin] = React.useState("");
  const [newcheckout, setnewcheckout] = React.useState("");


  const handleSubmit = async() => {
    // e.preventDefault();
    // const { name, rollno, checkin, checkout } = newuser;
    await addDoc(usersCollectionRef,{name:newName,rollno:newrollno,checkin:newcheckin,checkout:newcheckout})
    
  //   if (name && rollno && checkin) {
  //     const res = await fetch("https://assessment-5cd3b-default-rtdb.firebaseio.com/addstudenform.json", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type":"application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         rollno,
  //         checkin,
  //         checkout
  //       })
  //     });
     
  //     if (res) {
  //       setUser({
  //         name: "",
  //         rollno: "",
  //         checkin: "",
  //         checkout:""
  //       })
  //       alert("success");
  //     }
  //   }
  //   else {
  //     alert("please fill all the data");
  //   }
   

   }
  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers();
  },[])
  
  const [age, setAge] = React.useState({
    totalStudents: "",
    studentPresent: "",
    checkedout: ""
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  }
  const [open, setOpen] = React.useState();
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,marginLeft:"55px" }}>
            ASSIGNMENT
          </Typography>
            
          <FormControl variant="standard" sx={{ m: 1, minWidth: 280,backgroundColor:"#a6d4fa",marginRight:"20%" }}>
        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          
        >
          <MenuItem value={age.totalStudents}>Total Students:</MenuItem>
          <MenuItem value={age.studentPresent}>Students Present</MenuItem>
          <MenuItem value={age.checkedout}>Students Checked Out</MenuItem>
        </Select>
      </FormControl>
      
          <Button color="inherit" style={{ backgroundColor: "green" }} onClick={handleToggle}>Add Student</Button>
          
          <Backdrop
    sx={{ color: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            >
             <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '41ch' },
      }}
      noValidate
      autoComplete="off"
      >

          <FormControl style={{backgroundColor:"white"}} method="POST">
              <Typography variant="h4" align='center' mt={'2px'}>Add Student Details</Typography>
                <TextField label="Name" style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }} 
              name="name" required={true}
              //  value={name} 
               onChange={(event)=>{setnewName(event.target.value)}}
                />
              <TextField label="Roll No" style={{marginLeft:"20px",marginRight:"20px"}} 
                  // value={rollno}
                  name="rollno" required={true}
                   onChange={(event)=>{setnewrollno(event.target.value)}}
                >Enter the Roll no</TextField>
              <TextField label="CheckIn" style={{marginLeft:"20px",marginRight:"20px"}}
                  // value={checkin}
                  name="checkin" required={true}
                  onChange={(event)=>{setnewcheckin(event.target.value)}}
                >Enter CheckIn time:</TextField>
              <TextField label="CheckOut" style={{marginLeft:"20px",marginRight:"20px"}}
                  // value={checkout}
                  name="checkout"
                onChange={(event)=>{setnewcheckout(event.target.value)}}
                >
                  Enter CheckOut time:</TextField>
              <Grid container spacing={0.3}>
                  <Grid item xs={4} style={{marginLeft:"110px",marginTop:"10px",marginBottom:"30px"}}>
                    <Button variant="outlined" color="success"
                      onClick={handleSubmit}
                    >Submit</Button>
                  </Grid>
                  <Grid item xs={4}style={{marginTop:"10px",marginBottom:"30px"}}>
                      <Button variant="outlined" onClick={handleClose}>Close</Button> 
                      </Grid>
              </Grid>
              
          </FormControl>
            </Box>
            
          </Backdrop>
          
          <Button color="inherit" style={{ backgroundColor: "red",marginLeft:"10px" }}>Delete Student</Button>
        </Toolbar>
      </AppBar>
      
          
       
                {users.map((user)=>{
                  return (
                    <Box display="flex"
                    flexDirection={"column"}>
                    <Grid container spacing={5} columns={7} direction="row">
        <Grid item xs={2} md={2}>
                    <Card sx={{ minWidth: 120 }} style={{marginTop:"60px",marginLeft:"20%",backgroundColor:"grey"}}>
                    <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Name:{user.name}<br/>
                      Roll No:{user.rollno}<br/>
                      CheckIn Time:{user.checkin}hrs<br />
                      ChekOut Time:{user.checkout}
                        </Typography>
                        </CardContent>
      
                        </Card>
                      </Grid>
                      </Grid>
                      </Box>
                  )
          })}
       
{/*         
      
        
        <Grid item xs={2}>
          <Card sx={{ minWidth: 120 }}style={{marginTop:"60px",marginLeft:"20%",backgroundColor:"grey"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        
      </CardContent>
      
    </Card>
        </Grid>
       
       */}
     
      
    </Box>
    
  )
}

export default Appbar
