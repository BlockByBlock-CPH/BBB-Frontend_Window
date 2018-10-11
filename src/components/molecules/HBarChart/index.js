import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './styles.css';

const data = {
    labels: [15745, 8225, 12592, 15747, 12591],
    datasets: [
        {
            label: 'Top Max People by Zone (Monday)',
            backgroundColor: [
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
            data: [326476, 251778, 211015, 209167, 203294]
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

const HorizontalBarChart = (props) => {
    return(
        <HorizontalBar
            id="chartHorzontalBar"
            data={data}
            options={options}
        />
    )
}

export default HorizontalBarChart;