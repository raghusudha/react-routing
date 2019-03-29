import React, { Component } from 'react';
import Menu from './Menu';
import DataService from '../service/DataService';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import WelcomeDialog from './WelcomeDialog';
import WithUser from './HOC';

class Home extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/api/customers`)
      .then(res => {
        console.log(JSON.stringify(res.data));
      });
  }
   customers = DataService.getCustomers();
   render() {
      return (
         <div>
         <Menu/>
            <h2>Home2</h2>
            <hr/>
            <WithUser/>
            <button>Add Customer</button>
            <ul>
        {this.customers.map(item => (
          <li key={item.id}>{item.id} | {item.name} | {item.email} | {item.address} | <Link to={'/customer/'+item.id}>Edit</Link></li>
        ))}
      </ul>
         </div>
      );
   }
}
export default Home;