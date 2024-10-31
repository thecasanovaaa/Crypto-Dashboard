import { convertDate } from "./convertDate";

export const settingChartData = (setChartData,prices) => {
    setChartData({
        labels: prices.map((prices)=> convertDate (prices[0])),
        datasets: [
            {
                data:prices.map((prices)=> (prices[1])),
                borderColor:"#3a80e9",
                borderWidth:2,
                fill:true,
                tension:0.25,
                backgroundColor:"rgba(58,128,233,0.1)",
                pointRadius:0,
            },
        ],
    });
}