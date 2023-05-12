import React from 'react'
import './usertweets.css'
const UserTweets = ({ username, image, tweettext, profilepic }) => {
    return (
        <>
            <div class="card ">
                <div className="space-left"></div>
                <div className='content'>
                    <div className="mainheader">
                        <div className="subheader">
                            <img src={profilepic} alt="Jersy" className='profile-image' />
                            <div className="headertext">
                                <p className='username'>{username} </p>
                                <p className='tweettext'>{tweettext}</p>
                            </div>
                        </div>
                    </div>
                    <div class="image">
                        <img src={image} alt="Jersy" className='img' />
                    </div>
                </div>
                <div className="space-right">
                </div>


            </div >
        </>
    )
}

export default UserTweets