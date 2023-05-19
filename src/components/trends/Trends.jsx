import React from 'react'
import SearchBox from './SearchBox'
import EachTrends from './EachTrends'
import './trends.css'
const Trends = () => {
    return (
        <>
            <div className="trends">
                <div className="trends-layout">
                    <div className='searchbox'>
                        <SearchBox />
                    </div>
                    <div className="cardtrends">
                        <div className="trendsheader">Trends For you</div>
                        <div className="trendslist">
                            <EachTrends trendtype={'Sports - Trending'} trendname={'UEFA'} tweetcounts={'52.9k Tweets'} />
                            <EachTrends trendtype={'Sports - Trending'} trendname={'Cristiano Ronaldo'} tweetcounts={'105k Tweets'} />
                            <EachTrends trendtype={'Nepal - Politics'} trendname={'Balen'} tweetcounts={'9.9k Tweets'} />
                            <EachTrends trendtype={'Business man - Trending'} trendname={'Elon Musk'} tweetcounts={'97.9k Tweets'} />


                        </div>


                    </div>
                </div>



            </div>


        </>
    )
}

export default Trends