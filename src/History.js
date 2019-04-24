import React, { Component } from 'react';
import { formatTime } from './time'

export default class History extends Component {

    constructor({times}){
        super();
        this.state = {
            times
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({times: nextProps.times})
    }

    render(){

        let minTime = Math.min(...this.state.times)


        return(
            <div className='flex flex-column justify-start'>
                <div>
                    <p className='tc fw6 f2 ph3'>History</p>
                    <ol className='flex flex-column justify-start'>
                    {this.state.times.map((time) => 
                        <li className={(minTime===time)}>{formatTime(time)}</li>)}
                    </ol>
                </div>
                <button onClick={this.props.clear} className="bw0 grow br3 bg-orange white fw3 f3 center">RESET</button>
            </div>
        )
    }

}
