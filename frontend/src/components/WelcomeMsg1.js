import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class WelcomeMsg1 extends Component {
    render() {
        return (
            <Spring
            from={{opacity: 1}}
            to={{opacity: 0}}
            config={{duration: 2500}}
            >
                {props => (
                    <div style={props}>
                        <div style={namaste}>
                            <h1>Namaste</h1>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

const namaste = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

export default WelcomeMsg1