import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Menu extends Component {
   render() {
      return (
         <div>
            <ul>
                  <Link to={'/home'}>Home</Link>  |  
                  <Link to={'/dashboard/7'}>Dashboard</Link> | 
                  <Link to={'/aboutus'}>Aboutus</Link> | 
                  <Link to={'/mathapp'}>Math App</Link> | 
                  <Link to={'/hello'}>Hello</Link> | 
                  <Link to={'/login'}>Logout</Link> | 
               </ul>
         </div>
      );
   }
}
export default Menu;

