import React,{useState} from 'react'
import '../styles/HomeStyle.css';
import { Navbar,Nav,Container ,Form,Button,Alert} from 'react-bootstrap';
import logo from '../assert/ballon.svg';
import  {useHistory  } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function SignIn(props) {
  let history = useHistory();
  let state={
    username:'',
    password:'',
    visible:false

  }

  const loginUser=()=>{

    fetch('http://192.168.8.112:8080/api/v1/find', {
      method: 'GET',
      headers: {
        'username':state.username,
        'password':state.password
       
      }
    })
    .then((response) => response.json())
    .then((json) => {
          if(state.username==json.username && state.password==json.password){
            console.log("Login Button Click");
            history.push({pathname:"/homepage",
            state: state });
            
          }else{
           
          }
  
      })
      .catch(error=>{
         
      } )
  }
        
const showAlert=()=>{
  
}
 
showAlert();
    return (
        <div className="App">
      <header className="App-header">
        {/* ------------------------------------------------------------------------- */}
     

        <img src={logo} className="App-logo" alt="logo" />
        <Form className="mt-2">
  <Form.Group className="mb-3" controlId="username">
    <Form.Control type="text" placeholder="Enter username"
      onChange={(value)=>{
        state.username=value.target.value
       }}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Control type="password" placeholder="Password" 
    
    onChange={(value)=>{
      state.password=value.target.value
     }}
    
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="text">
  <Form.Text className="text-muted "  >
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  
  <Button variant="primary" 
  size="lg"  style={{width:200}}
  onClick={()=>{
    if(state.password.length>0&&state.username.length>0){
      if(state.username=="Dilshan"&&state.password=="41197100"){
        history.push({pathname:"/adminpage"})
      }else{
        loginUser()
  
        }
    }else{
      alert("please Enter valid username and Password")
    }
    

  }
  }
  > Login
</Button>

<h6 style={{fontSize:15,marginTop:5}} >if you don't have an account?  <Link to="/signup">SignUp</Link></h6>
</Form>
      </header>
 
    </div>
    )
}


export default SignIn
