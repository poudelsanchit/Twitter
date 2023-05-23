import React from 'react'
import { useNavigate } from 'react-router-dom'

const TweetImage = ({ image, id, newapikey }) => {
    const navigate = useNavigate();
    const navigateToTweet = () => {
        navigate(`/tweet/${id}/${newapikey}`);
    }
    return (
        <>
            <div className="image" >
                <img src={image} alt="Jersy" className='img tweetmainiamge' onClick={navigateToTweet} />
            </div>
        </>
    )
}

export default TweetImage