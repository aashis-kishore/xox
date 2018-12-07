import React, { Component } from 'react';
import './Button.css';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        // e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        const target = event.target;

        if(this.state.isToggleOn) {
            target.classList.remove('btn-on');
            target.classList.add('btn-off');
            console.log('Off');
        } else {
            target.classList.remove('btn-off');
            target.classList.add('btn-on');
            console.log('On');
        }
    }

    render() {
        return (
            <button className="btn btn-off" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' :'OFF'}
            </button>
        );
    }
}

export default Button;