import React, { Component } from 'react';
import echarts from 'echarts';

class PieChart extends Component {  
   
    componentDidMount = () => {
        let myChart = echarts.init(this.refs.chartEcharts);
        // draw chart
        myChart.setOption({
            backgroundColor: '#424242',

            title: {
                text: 'Age %',
                left: 'center',
                top: 0,
                textStyle: {
                    color: '#ccc',
                    fontSize: 14
                }
            },

            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series : [
                {
                    name:'Age',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '50%'],
                    data:[
                        {value:335, name:'18 - 24'},
                        {value:310, name:'25 - 32'},
                        {value:274, name: '33 - 40'},
                        {value:235, name:'41 - 48'},
                        {value:400, name:'49 - 56'}
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)',
                            },
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,184,212, 0.6)',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        });
    }

    render() {
        return(
            <div 
                id="chartEcharts" 
                ref="chartEcharts" 
                style={{ width:'90%', height:200, padding: 5 }}
            >
            </div>
        )
    }
    
    
}

export default PieChart;