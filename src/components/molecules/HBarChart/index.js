import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import './styles.css';


const HorizontalBarChart = (props) => {

    const { dataTC } = props;
    let legend = false;
    let labels = Object.values(dataTC.labels).map(label => {return(label)});
    let title = dataTC.title[0];
    let dataset = Object.values(dataTC.series).map((serie, index) => {
        return (   
            {
                label: ''+index+'',
                backgroundColor: 'rgba(0, 229, 255,0.6)',
                borderColor: 'rgba(0, 229, 255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 229, 255,1)',
                hoverBorderColor: 'rgba(0, 229, 255,1)',
                data: Object.values(serie).map(s => {return(s)})
            }
        );
    });
    
    const data = {
        labels: labels,
        datasets: dataset        
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
                    },
                    fontColor: '#BDBDBD'
                },
                gridLines: {
                    color: '#292929',
                    display: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 10,
                    fontColor: '#BDBDBD'
                },
                gridLines: {
                    color: '#292929',
                    display: true
                }
            }]
        },
        legend: {
            display: legend
        },
        tooltips: {
            enabled: true
        },
        title: {
            display: true,
            text: title,
            fontColor: '#BDBDBD',
            fontSize: 12
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuint'
        }     
    };

    return(
        <HorizontalBar
            id="chartHorzontalBar"
            data={data}
            options={options}
        />
    )
}

export default HorizontalBarChart;