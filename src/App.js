import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './app/Home';
import Login from './app/Login';
import Dashboard from './app/Dashboard';
import Aboutus from './app/Aboutus';
import MathApp from './app/MathApp';
import EditCustomer from './app/EditCustomer';
import AddCustomer from './app/AddCustomer';
import HelloMessage from './app/HelloMessage';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2> Bank Management</h2>
               <hr />
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/home' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/dashboard/:id' component={Dashboard} />
                  <Route exact path='/customer/:id' component={EditCustomer} />
                  <Route path="/hello"
                    render={props => <HelloMessage name="Sunil333, " {...props} />}
                    />
                  <Route exact path='/customer/add' component={AddCustomer} />
                  <Route exact path='/aboutus' component={Aboutus} />
                  <Route exact path='/mathapp' component={MathApp} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;