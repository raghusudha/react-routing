import React, { Component } from 'react';
import './App.css';


class Login extends Component {
    onLogin(){
        window.location="Menu";
    }
   render() {
      return (
         <div className="App">
            <input placeholder="username"></input><br></br>
            <input type="password" placeholder="password"></input><br></br>
            <button onClick={()=>this.onLogin()}>Login</button>
            
            </div>
           
      );
     
   
   }
}
export default Login;