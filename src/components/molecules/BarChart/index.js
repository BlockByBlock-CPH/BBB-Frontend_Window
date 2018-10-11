import React from 'react';
import { Bar } from 'react-chartjs-2';
import './styles.css';

const BarChart = (props) => {  
    const { dataBC } = props;
    
    const data = {
        labels: dataBC.labels,
        datasets: [
            {
                label: dataBC.title,
                backgroundColor: [
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)',
                    'rgba(255,99,132,0.2)'
                ],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: dataBC.series
            }
        ]
    };
    
    const options = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '' + value;
                    }
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 10
                }
            }]
        },
        legend: {
            display: true
        },
        tooltips: {
            enabled: true
        }        
    };
    return(
        <Bar
            id="chartBar"
            data={data}
            options={options}
        />
    )
}

export default BarChart;