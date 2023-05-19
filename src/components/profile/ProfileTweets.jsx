import React from 'react'
import './profiletweets.css'
const ProfileTweets = ({ tweet }) => {

    return (
        <>
            <div className="profiletweets">
                <h1>{tweet}</h1>
            </div>
        </>
    )
}

export default ProfileTweets