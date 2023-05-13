import React from 'react'
import './EachTrends.css'
const EachTrends = ({ trendtype, trendname, tweetcounts }) => {
    return (
        <div className='eachtrendslist'>
            <div className='trendtype'>{trendtype}</div>
            <div className='trendname'> {trendname}</div>
            <div className='tweetcounts'>{tweetcounts}</div>
        </div>

    )
}

export default EachTrends