import React, { Component } from 'react';
import {formatTime} from './time'

export default class Stopwatch extends Component {


    constructor({running, runningTime}){
        super();
        this.state = {
            running,
            runningTime,
            startTime: null,
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.running !== this.state.running) {
            this.handleButton()
        }
    }

    handleButton = () => {
        if (!this.state.running) {
            this.setState({startTime: Date.now()})
            this.timer = setInterval(
                () => this.setState({runningTime: Date.now() - this.state.startTime}), 10) 
        } else {
            clearInterval(this.timer)
            this.props.updateTimes(this.state.runningTime)
        }
        this.setState({
            running: !this.state.running
        })
    }

    render(){

        return(

            <div className='flex flex-column justify-center'>
                <div className='ph6 pv4 f-headline center tracked-tight'>
                    {formatTime(this.state.runningTime)}
                </div>
                <div className='pb3 center ph5'>
                    {this.state.running ? 
                    <button onClick={this.handleButton} className="bw0 grow br3 bg-red white fw5 f3 pv2 ph6">STOP</button>: 
                    <button onClick={this.handleButton} className="bw0 grow br3 bg-green white fw5 f3 pv2 ph6">START</button>}
                    
                </div>
            </div>


        )

    }
}
