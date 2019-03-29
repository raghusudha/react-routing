import React, { Component } from 'react';
import InnerBox from './InnerBox';
import MathLib  from '../service/Math';

export default class Box extends Component {
	constructor(props) {
	  super(props);
	  this.state = {box1:'red',box2:'green',box1val:1,box2val:4 };
	}
	updateBox1Value(value){
		console.log("value2:"+ value);
		var state = this.state;
		state.box1val = value;
		this.setState(state);
	}
	updateBox2Value(value){
		console.log("value2:"+ value);
		var state = this.state;
		state.box2val = value;
		this.setState(state);
	}
	sum(){
		return this.state.box1val + this.state.box2val;
	}
  render() {
    return (
      <div>
        <h1>I am the outer box</h1>
        <InnerBox name={this.state.box1} value={this.state.box1val} onValueChange={(v) => this.updateBox1Value(v)}/>
        <InnerBox name={this.state.box2}  value={this.state.box2val} onValueChange={(v) => this.updateBox2Value(v)}/>
				<label>{MathLib.sum(3,6) }</label>
      </div>
    );
  }
}