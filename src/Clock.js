import React from 'react';

export default class Clock extends React.PureComponent {
   
    constructor() {
        super();
        this.state = {
        time: new Date()
        }
    }
    componentDidMount() {
     this.iterval = setInterval( () => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    tick() {
       this.setState({
           time: new Date()
       })
    }
    render() {
        return (
            <p>
                Clock {this.state.time.toLocaleTimeString()}
            </p>
        )
    }
}