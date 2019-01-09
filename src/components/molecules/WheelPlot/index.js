import React, { Component } from 'react';
import { drawPlot } from './helperWheelPlot';
import './styles.css';


  
class WheelPlot extends Component {

    componentDidMount() {
        drawPlot(this.props.dataHomeZoneWheel, this.wheelPlot);
    }
    
    render() {
        return (
            <div ref={wp => this.wheelPlot = wp}></div>
        )
    }
}

export default WheelPlot;