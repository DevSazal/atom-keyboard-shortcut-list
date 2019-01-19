import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      clock: 0
    };

    this.ticker = this.ticker.bind(this);
  }

  ticker(){
      this.setState({clock: new Date() - this.props.start});
  }

  componentDidMount(){
    this.timer = setInterval(this.ticker, 1000);
  }

  render(){
    var clock = Math.round(this.state.clock / 1000);
    return(
      <div>
        <br/>
        <span>{clock}</span>
        <p>Seconds.</p>
      </div>
    );
  }
}

export default Timer;
