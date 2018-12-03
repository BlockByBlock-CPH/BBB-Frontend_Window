import React, { Component } from 'react';
import echarts from 'echarts';

class DoughnutChart extends Component {  
   
    componentDidMount = () => {
        let myChart = echarts.init(this.refs.chartEcharts2);
        // draw chart
        myChart.setOption({
            backgroundColor: '#424242',
            title: {
                text: 'Gender %',
                left: 'center',
                top: 0,
                textStyle: {
                    color: '#ccc',
                    fontSize: 14
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                // backgroundColor: '#eee',
                // borderColor: '#aaa',
                // borderWidth: 1,
                // borderRadius: 4
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['Women','Men'],
                textStyle: {
                    color: '#ccc',
                    fontSize: 12
                }
            },
            // xAxis: {
            //     data: ['Women', 'Men']
            // },
            //yAxis: {},
            series: [
                {
                    name:'Gender',
                    type:'pie',
                    radius: ['60%', '40%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {
                            value:600, 
                            name:'Women',  
                            itemStyle: {
                                normal: {
                                    color: 'rgba(106,27,154, 0.6)',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                emphasis: {
                                    color: '#8E24AA',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        },
                        {
                            value:400, 
                            name:'Men',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(0,184,212, 0.6)',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },
                                emphasis: {
                                    color: '#00E5FF',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        },

                    ]
                }
            ]
        });
    }
    render() {
        return(
            <div 
                id="chartEcharts2" 
                ref="chartEcharts2" 
                style={{ width:'100%', height:200, padding: 5 }}
            >
            </div>
        )
    }
    
    
}

export default DoughnutChart;