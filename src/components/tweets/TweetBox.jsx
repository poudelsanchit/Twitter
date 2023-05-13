import React from 'react'
import './tweetbox.css'
const TweetBox = () => {
    return (
        <div className='tweetbox'>
            <div className="tweetboxheader">
                <p className='tweethome'>
                    <p className='tweethometext'>
                        Home
                    </p>
                </p>
            </div>
            <div className="tweetboxmain">
                <div className="tweetboximage">
                    <img src='https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg' alt="Jersy" className='profile-image' />

                </div>
                <div className="tweetboxform">
                    <input type="text" id="tweetinput" placeholder="What is happening?!" />
                </div>
            </div>
        </div>
    )
}

export default TweetBox