import React, { useEffect, useState } from 'react'
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import axios from 'axios';
import TabsComponent from '../Tabs';
import Loader from '../../Common/Loader';

function Search() {
    const [coins,setCoins] = useState([ ]);
    const [search,setSearch] = useState("");
    const [isloading,setIsloading] = useState(true);
    useEffect(()=>{
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res)=>{
            setCoins(res.data);
            setIsloading(false);
        })
        .catch((error)=>{
            console.log("error",error);
            setIsloading(false);
        })
    },[]
);


    var filtercoins = coins.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
    <div className='search-flex'>
        <SearchRoundedIcon/>
        <input placeholder='Search...' 
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
    {isloading ?(
        <Loader/>
    ) :(
    <div>
    <TabsComponent coins={filtercoins}/>
    </div>)}
    </>
  )
}

export default Search
