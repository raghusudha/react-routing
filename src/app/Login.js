import React, { Component } from 'react';
//import {withRouter} from "react-router-dom";
import axios from 'axios';
import AppService from '../service/AppService';
export default  class Login extends Component {
   constructor (props) {
     super(props);
     this.state = {
       email: '',
       password: '',
       formErrors: {email: '', password: ''},
       emailValid: false,
       passwordValid: false,
       formValid: false
     }
   }
   handleUserInput (e) {
   console.log(e.target.name);
   console.log(e.target.value);
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}/*
gotoHome(){
  axios.post('http://localhost:4000/api/authenticate', {'username': this.state.email, 'password':this.state.password })
  .then(res => {
    console.log(JSON.stringify(res.data));
    if(res.data == 'success'){
     // service.setName(this.state.email);
      this.props.history.push("/home/");
    }else{
      alert("Incorrect username or password.");
    }
  });
}*/
gotoHome(){
  var p = AppService.doLogin(this.state.email,this.state.password);
  p.then((result) => {
   if(result == 'success'){
    this.props.history.push("/home");
    }else{
      alert("Incorrect username or password.");
    }
  }, // shows "done!" after 1 second
  error => alert(error) // doesn't run
  );
}
   render() {
      return (
         <div>
         <h3>Login</h3>
               <div>
               Username: <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
               </div><br/>
               <div>
               Password: <input type="password" name="password" value={this.state.password}  onChange={(event) => this.handleUserInput(event)}/>
               </div>
               <button onClick={()=>this.gotoHome()}>Login</button>              
         </div>
      );
   }
}
