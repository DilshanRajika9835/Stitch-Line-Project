
import React from 'react'
import '../styles/HomeStyle.css';
import { Button,Card,Form,Image } from 'react-bootstrap';
import logo from '../assert/car.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
function SignUp() {

  let state={
    name:'',
    email:'',
    mobile:'',
    username:'',
    password:''

  }
  const saveUser=()=>{
    console.log("Method Call")
    fetch('http://192.168.8.112:8080/api/v1/save', {
      method: 'POST',
      body:JSON.stringify({
        name:state.name,
        email:state.email,
        mobile:state.mobile,
        username:state.username,
        password:state.password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })  .then((response) => response.json())
    .then((json) => {
      console.log(json)
    });
  
  }
  return (
    <div className="App-header">
      <Image src={logo} fluid />
      <div className="signup" style={{position:"absolute"}} >
      <Card style={{ width: '20rem',backgroundImage: `url(${logo})` }}className="signIncard">
              <Card.Body>
              <Form>
  <Form.Group className="mb-3" controlId="email">
   <Form.Control type="text" placeholder="Enter name" className="form-control"
    onChange={(value)=>{
      state.name=value.target.value
   }}
   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="email">
   <Form.Control type="email" placeholder="Enter email" className="form-control" 
    onChange={(value)=>{
      state.email=value.target.value
   }}
   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="email">
   <Form.Control type="number" placeholder="Enter mobile" className="form-control" 
    onChange={(value)=>{
      state.mobile=value.target.value
   }}
   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="email">
   <Form.Control type="text" placeholder="Enter username"  className="form-control" 
   onChange={(value)=>{
    state.username=value.target.value
   }}
   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="password">
    <Form.Control type="password" placeholder="Enter Password" className="form-control" 
    onChange={(value)=>{
      state.password=value.target.value
     }}
    
    />
  </Form.Group>
  <p style={{color:"#23deb9",fontSize:15}}>if you already have an account? <Link style={{color:"blue",fontSize:14}} to="/">SignIn</Link></p>
  <Button variant="primary" type="submit" style={{float:"right",width:100}}
 
  onClick={()=>{
   if(state.name.length>4&&state.username.length>4 && state.email.length>10){
    saveUser()
   }
  }
  
  }
  
  >SignUp
  </Button>

</Form>
 </Card.Body>
  </Card>
       
    </div>
    </div>
    
  );
}

export default SignUp;