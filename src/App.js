import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import Stopwatch from './Stopwatch';
import History from './History';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      times: [],
      running: false,
    }
    this.handleSpace = this.handleSpace.bind(this);
  }

  timeAdder = time => {
    let newtimes = [...this.state.times, time];
    this.setState({times: newtimes});
  }

  handleSpace = e => {
    e.target.blur();
    if (e.keyCode === 32) {
      this.setState({running: !this.state.running})
    }
    if (e.keyCode === 82) {
      this.clearHistory()
    }
  }
  clearHistory = () => {
    this.setState({times: []})
  };

  render() {
    return (
      <div className="avenir">
      <KeyboardEventHandler
        handleKeys={['space', 'r']}
        onKeyEvent={(key, e) => this.handleSpace(e)} />
        <div className="flex vh-100 justify-around" onKeyDown={(e) => this.handleSpace(e)}>
          <div className='w-70'>
            <div className='flex flex-column items-center'>
              <p className="f1 lh-headline">Cube Timer</p>
              <div className={this.boxclasses + ' w60'}>
                <Stopwatch running={this.state.running} runningTime={0} updateTimes={this.timeAdder}/>
              </div>
              <p className='f4 lh-startandstop'>Press space to {this.state.running ? 'stop' : 'start'} clock,    r to reset history</p>
            </div>
          </div>
          <div className='w-20 pa3 flex flex-column justify-around'>
            <div className={this.boxclasses}>
              <History clear={this.clearHistory} times={this.state.times}></History>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;
