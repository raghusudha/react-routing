import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <hr/>
        <button onClick={()=>this.componentDidMount()} >Start</button>
        <button onClick={()=>this.setState({ seconds: 0 })} >Reset</button>
        <button onClick={()=>this.componentWillUnmount()} >Pause</button>
      </div>
    );
  }
}