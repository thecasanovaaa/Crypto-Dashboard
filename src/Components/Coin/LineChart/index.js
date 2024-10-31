import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, scales, Ticks} from 'chart.js/auto';//dont remove this line
import { callback } from 'chart.js/helpers';
import { convertNumber } from '../../../Function/convertnumber';

function Linechart( {chartdata,multiAaxis,priceType}) {
    const options = {
        plugins:{
            legend:{
                display: multiAaxis? true : false,
            },
        },
        responsive: true,
        interaction:{
            mode: "index",
            intersect: false,
        },
        scales:{
            y:{
                ticks:{
                    callback: function (value,index,ticks){
                        if(priceType== "prices")return "$" + value.toLocaleString();
                        else{
                            return "$" + convertNumber(value);
                        }
                    }
                }
            }
        }
    };
  return <Line data={chartdata} options={options}/>;
}

export default Linechart
