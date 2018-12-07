import React, { Component } from 'react';

import './App.css';
import Clock from './Clock/Clock';
import Button from './Button/Button';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            target: null
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick(target) {
        // e.preventDefault();

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            target: target
        }));
    }

    render() {
        const name = 'Boilerplate';
        return (
            <div id="container">
                <h1 id="title">React Application {name}</h1>
                <Clock />
                <Button onBtnClick={this.handleBtnClick} isToggleOn={this.state.isToggleOn} target={this.state.target}/>
            </div>
        );
    }
}

export default App;