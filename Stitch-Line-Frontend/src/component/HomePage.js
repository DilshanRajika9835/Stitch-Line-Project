import React, { Component } from 'react'
import logo from '../assert/boy.svg';
import '../styles/HomeStyle.css';
import {Button} from 'react-bootstrap';
import  {useHistory,Link  } from 'react-router-dom'
export default class HomePage extends React.Component {
    constructor(props) {
     
        super(props)
    
        this.state = {
        }
   
        const { history } = this.props;
        window.addEventListener("popstate", () => {
        history.go(1);
      });
    
    
    }
  

    render() {
        const { state } = this.props.location//access data in other page
        return (
            <div className="App">
                 <header>
                 <img src={logo} className="App-logo" alt="logo" />
                 
                 <h1  onClick={()=>{
                  console.log("Hello There How Are You");

                 }}>Hi! {state.username}</h1>
                 <p>you are login in</p>
                 </header>
                  <Link to="/">Log Out</Link>
            </div>
        )
    }
}
