import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Menu extends Component {
   render() {
      return (
         <div>
             
        <Link to={'/home'}>Home</Link> |
        <Link to={'/aboutus'}>Aboutus</Link> |
        <Link to={'/customer'}>Customer</Link> |
        <Link to={'/login'}>Logout</Link>|
                   
         </div>
      );
   }
}
export default Menu;