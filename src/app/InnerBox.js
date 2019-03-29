import React, { Component } from 'react';

export default class InnerBox extends Component {
  render() {
    return (
      <div>
      	
        <h3>I am the Inner box {this.props.name} :: {this.props.value}</h3>
        <button onClick={() => this.props.onValueChange(8)}> update</button>
      </div>
    );
  }
}