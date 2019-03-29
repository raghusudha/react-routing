import React, { Component } from 'react';
import Menu from './Menu';
import DataService from '../service/DataService';
class AddCustomer extends Component {
   customers = DataService.getCustomers();
   render() {
      return (
         <div>
         <Menu/>
            <h2>AddCustomer</h2>
            <hr/>
            <input type="text" placeholder="name"></input><br/><br/>
            <input type="text" placeholder="name"></input><br/><br/>
            <input type="text" placeholder="name"></input><br/><br/>
            <input type="text" placeholder="name"></input><br/><br/>
            <input type="button" value="Add Customer"></input>
         </div>
      );
   }
}
export default AddCustomer;