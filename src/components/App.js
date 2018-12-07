import React, { Component } from 'react';

import './App.css';
import Clock from './Clock/Clock';
import Button from './Button/Button';


class App extends Component {
    render() {
        const name = 'React front-end';
        return (
            <div>
                <h1>Boilerplate: {name}</h1>
                <Clock />
                <Button />
            </div>
        );
    }
}

export default App;