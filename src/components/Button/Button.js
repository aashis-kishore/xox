import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onBtnClick(event.target);
    }

    handleBtnToggle(target, isToggleOn) {
        if(target) {
            if(isToggleOn) {
                target.classList.add('btn-on');
                target.classList.remove('btn-off');
                console.log('ON');
            } else {
                target.classList.add('btn-off');
                target.classList.remove('btn-on');
                console.log('OFF');
            }
        }
    }

    render() {
        return (
            <div id="on-off-btn">
                <button className="btn btn-off" onClick={this.handleClick}>
                    { this.props.isToggleOn ? 'ON' : 'OFF' }
                    { this.handleBtnToggle(this.props.target, this.props.isToggleOn) }
                </button>
            </div>
        );
    }
}

export default Button;