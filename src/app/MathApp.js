import React from 'react';
import ReactDOM from 'react-dom';
import MathComp from './MathComp';
import Menu from './Menu';

export default class MathApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valOne: 2,valTwo: 4, sign: '+' };
  }
  result(){
    	let num1 = parseInt(this.state.valOne);
    	let num2 = parseInt(this.state.valTwo);
    	if(this.state.sign == '+'){
    		return num1+num2;
    	}else if(this.state.sign == '*'){
    		return num1*num2;
    	}else if(this.state.sign == '-'){
    		return num1-num2;
    	}else if(this.state.sign == '/'){
    		return num1/num2;
    	}
    }

  render() {
    return (
      <div>
      <Menu/>
        <h3>Math App</h3>
        <MathComp type="number"
            onChange={(e) => this.onChangeValOne(e)}
            value={this.state.valOne}
          />
          <MathComp type="sign"
            onChange={(e) => this.onChangeSign(e)}
            value={this.state.sign}
          />
          <MathComp type="number"
            onChange={(e) => this.onChangeValTwo(e)}
            value={this.state.valTwo}
          />
          <label>=</label> <br/>
          <label>{this.result()}</label>
      </div>
    );
  }

  onChangeValOne(value) {
  	this.state.valOne = value;
    this.setState(this.state);
  }
  onChangeValTwo(value) {
  	this.state.valTwo = value;
    this.setState(this.state);
  }
  onChangeSign(value) {
    this.state.sign = value;
    this.setState(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

