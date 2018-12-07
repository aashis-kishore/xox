import React, { Component } from 'react';
import './Clock.css';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div id="clock">
                <h1>Time 
                    <span id="time">{this.state.date.toLocaleTimeString()}</span>
                </h1>
            </div>
        );
    }
}

export default Clock;