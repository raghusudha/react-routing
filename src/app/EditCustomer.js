import React, { Component } from 'react';
import Menu from './Menu';
import DataService from '../service/DataService';
class EditCustomer extends Component {
    constructor(props){
        super(props);
        this.state={customer: DataService.getCustomerById(this.props.match.params.id) };
    }
   //customer = DataService.getCustomerById(this.props.match.params.id);
   updateCustomer(){
    DataService.updateCustomer(this.state.customer);
    this.props.history.push("/home");
   }
   handleUserInput(e){
    var state = this.state;
    const name = e.target.name;
    const value = e.target.value;
    state.customer[name]= value;
    this.setState(state);
   }
   render() {
      return (
         <div>
         <Menu/>
            <h2>Edit Customer Id:{this.props.match.params.id}</h2>
            <hr/>
            <input type="text" name="name" placeholder="name" onChange={(event) => this.handleUserInput(event)} value={this.state.customer.name}></input><br/><br/>
            <input type="text" name="email" placeholder="email" onChange={(event) => this.handleUserInput(event)} value={this.state.customer.email}></input><br/><br/>
            <input type="text" name="phone" placeholder="phone" onChange={(event) => this.handleUserInput(event)} value={this.state.customer.phone}></input><br/><br/>
            <input type="text" name="address" placeholder="address" onChange={(event) => this.handleUserInput(event)} value={this.state.customer.address}></input><br/><br/>
            <input type="button" value="Update Customer" onChange={(event) => this.handleUserInput(event)} onClick={()=> this.updateCustomer()} ></input>
         </div>
      );
   }
}
export default EditCustomer;