import React, { Component } from 'react';
import Menu from './Menu';
class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {};

    }
   render() {
      return (
         <div>
         <Menu/>
            <h2>Dashboard</h2>
            <label>{this.props.match.params.id}</label>
         </div>
      );
   }
}
export default Dashboard;