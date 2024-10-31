import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Common/Header';
import Loader from '../Components/Common/Loader';
import { convertObject } from '../Function/convertObject';
import List from '../Components/Dashboard/List';
import Info from '../Components/Coin/CoinInformation';
import { getCoinData } from '../Function/getCoinData';
import { getCoinPrices } from '../Function/getCoinPrices';
import Linechart from '../Components/Coin/LineChart';
import SelectDays from '../Components/Coin/SelectDays';
import { settingChartData } from '../Function/settingChartData';
import PriceType from '../Components/Coin/PriceType';
import Footer from '../Components/Common/Footer';
function Coinpage() {
    const { id } = useParams();
    const[isloading, setIsloading] = useState(true);
    const[coindata,setCoinData] = useState();
    const[days,setDays] = useState(60);
    const[chartData,setChartData] = useState({});
    const [priceType, setPriceType] = useState('prices');
    useEffect(()=>{
        if(id){
            getData();
        }
    },[id]);


    async function getData() {

        const data = await getCoinData(id);
        if (data){
            convertObject(setCoinData,data);
            const prices = await getCoinPrices(id,days,priceType);
            if (prices.length>0){
                
            settingChartData(setChartData,prices);
            setIsloading(false);   
            }
        }

        
    }
    const handleDaysChange = async (event) => {
        setIsloading(true);
        setDays(event.target.value);
        const prices = await getCoinPrices(id,event.target.value,priceType);
        if (prices.length>0){
            settingChartData(setChartData,prices);
            setIsloading(false);   
        }
  };
  

    const handlePriceTypeChange = async (event, newType) => {
        setIsloading(true);
        setPriceType(newType);
        const prices = await getCoinPrices(id,days,newType);
        if (prices.length>0){
            settingChartData(setChartData,prices)
            setIsloading(false);   
        }
    };
  
  return (
    <div>
        <Header/>
        {isloading ? ( 
            <Loader/>
        ):(
        <>
        <div className='grey-wraper' style={{padding:"0rem 1rem"}}>
        <List coin={coindata}/>
        </div>
        <div className='grey-wraper'>
            <SelectDays day={days} handleDaysChange={handleDaysChange}/>
            <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <Linechart chartdata={chartData} priceType={priceType}/>
        </div>
        <Info heading={coindata.name} desc={coindata.desc}/>
        </>
    )}
    <Footer/>
    </div>
  )
}

export default Coinpage


// days={days} handleDaysChange={handleDaysChange}