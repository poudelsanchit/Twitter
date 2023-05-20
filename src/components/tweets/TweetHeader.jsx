import React from 'react'
import { useNavigate } from 'react-router-dom'

const TweetHeader = ({ username, tweettext, apikey }) => {
    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`/profile/:${apikey}`);
    }

    return (
        <>

            <div className='subheader'>
                <div className='headertext'>
                    <p className='username' onClick={navigateToProfile}>{username} </p>
                    <p className='tweettext'  >{tweettext}</p>
                </div>
            </div>
        </>
    )
}

export default TweetHeader