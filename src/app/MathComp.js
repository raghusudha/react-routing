import React from 'react';
import ReactDOM from 'react-dom';

export default class MathComp extends React.Component {
  constructor(props) {
    super(props);
    console.log(">> constructor MathComp");
    this.state = {};
    //Another approach to handle this 
    this.informParent = this.informParent.bind(this);
    this.state.text = this.props.value;
    this.value =  this.props.value;
  }

  render() {
  	console.log(">> render MathComp");
    return (
      <div>
          <input
            onChange={this.informParent}
            value={this.state.text}
          />
      </div>
    );
  }

  informParent(e) {
  	this.setState({ text: e.target.value });
  	if(this.props.type!="sign"){
  		this.props.onChange(parseInt(e.target.value));
  	}else{
  		this.props.onChange(e.target.value);
  	}
  	console.log(">>informParent" +e.target.value);    
  }
}

