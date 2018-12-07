import React, { Component } from 'react';

import './App.css';
import Clock from './Clock/Clock';
import Button from './Button/Button';


class App extends Component {
    render() {
        const name = 'Boilerplate';
        return (
            <div id="container">
                <h1 id="title">React Application {name}</h1>
                <Clock />
                <Button />
            </div>
        );
    }
}

export default App;