import React from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../Function/convertnumber';
import { Link } from 'react-router-dom';


function List({ coin }) {
    return (
        <Link to={`/coin/${coin.id}`}>
        <tr className='list-row'>
            <Tooltip title="Coin Image">
                <td className='td-image'>
                    <img src={coin.image} className='coin-logo list' />
                </td>
            </Tooltip>

            <Tooltip title="Coin Info" placement="bottom-start">
                <td>
                    <div className='name'>
                        <p className='coin-symbol mobile-symbol'>{coin.symbol}</p>
                        <p className='coin-name mobile-name'>{coin.name}</p>
                    </div>
                </td>
            </Tooltip>
            {coin.price_change_percentage_24h > 0 ? (
                <Tooltip title="Coin Price Percentage In 24hrs"
                placement="bottom-start">
                    <td className='chip-flex'>
                        <div className='price-chip list-price'>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className='icon-chip td-icon'>
                            <TrendingUpRoundedIcon /> 
                        </div>
                    </td>
                </Tooltip>
            ) : (
            <Tooltip title="Coin Price Percentage In 24hrs"
            placement="bottom-start">
                <td className='chip-flex'>
                    <div className='price-chip chip-red list-price'>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className='icon-chip chip-red td-icon'> 
                        <TrendingDownRoundedIcon />
                    </div>
                </td>
                </Tooltip>)}
                <Tooltip title="Coin Price In USD" placement="bottom-end">
                <td>
                    <h3 className='coin-price td-center-align mobile'
                        style={{
                            color: coin.price_change_percentage_24h < 0
                                ? "var(--red)"
                                : "var(--green)",
                        }}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </td>
            </Tooltip>

            <Tooltip title="Coin Total Volume" placement="bottom-end">
                <td>
                    <p className='total_volume td-right-align td-total-volume'>{coin.total_volume.toLocaleString()}</p>
                </td>
            </Tooltip>

            <Tooltip title="Coin Market Capital" placement="bottom-end">
                <td className='desktop-td'>
                    <p className='total_volume td-right-align'>
                        ${coin.market_cap.toLocaleString()}</p>
                </td>
            </Tooltip>
            <Tooltip title="Coin Market Capital" placement="bottom-end">
                <td className='mobile-td'>
                    <p className='total_volume td-right-align'>
                        ${convertNumber(coin.market_cap)}</p>
                </td>
            </Tooltip>
        </tr>
        </Link>
    )
}

export default List
