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
                            <a href="https://twitter.com/search?q=%22Vinicius%20Jr%22&src=trend_click&vertical=trends" target='_blank'><EachTrends trendtype={'Sports - Trending'} trendname={'Vinicius Junior'} tweetcounts={'119k Tweets'} /></a>
                            <a href="https://twitter.com/search?q=ronaldo&src=trend_click&vertical=trends" target='_blank'> <EachTrends trendtype={'Sports - Trending'} trendname={'Cristiano Ronaldo'} tweetcounts={'105k Tweets'} /></a>
                            <a href="https://twitter.com/search?q=%22Mount%20Everest%22&src=trend_click&vertical=trends" target='_blank'><EachTrends trendtype={'Trending in Nepal'} trendname={'Mount Everest'} tweetcounts={'9.9k Tweets'} /></a>
                            <a href="https://twitter.com/search?q=elonmusk&src=trend_click&vertical=trends" target='_blank'><EachTrends trendtype={'Business man - Trending'} trendname={'Elon Musk'} tweetcounts={'97.9k Tweets'} /></a>


                        </div>


                    </div>
                </div>



            </div>


        </>
    )
}

export default Trends