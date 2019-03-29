import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    //this.state.name = this.props.name;
    //this.name = "Rama";
    this.state = {name:props.name, company:this.props.company};
  }

  sayHi(){
    var a;
  	console.log("Hello Team");
    //this.name = "Vivek";
    this.setState({name:'Vivek'})
  }
  render() {
    return (
      <div>
      <div>
        Hello {this.state.name}
        Company {this.state.company}
        
      </div>
      <button onClick={()=>this.sayHi()}> Say Hello</button>
      </div>
    );
  }
}