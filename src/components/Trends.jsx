import React from 'react'
import './trends.css'
import SearchBox from './SearchBox'
const Trends = () => {
    return (
        <>
            <div className="trends">
                <div className="trends-layout">
                    <div className='searchbox'>
                        <SearchBox />
                    </div>
                    <div className="cardtrends"></div>
                    <div className="cardtrends"></div>


                </div>

            </div>

        </>
    )
}

export default Trends