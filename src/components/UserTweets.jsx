import React from 'react'
import './usertweets.css'
const UserTweets = ({ username, image, tweettext, profilepic }) => {
    return (
        <>
            <div class="card ">
                <div className="space-left">
                </div>
                <div className='content'>
                    <img src={profilepic} alt="Jersy" className='profile-image' />
                    <div className="mainheader">
                        <div className='subheader'>
                            <div className='headertext'>
                                <p className='username'>{username} </p>
                                <p className='tweettext'>{tweettext}</p>
                            </div>
                        </div>
                        <div class="image">
                            <img src={image} alt="Jersy" className='img' />
                        </div>
                        <div className="commentsection">
                            <div className="comments">
                                Comments
                            </div>
                            <div className="retweets">
                                ReTweets
                            </div>
                            <div className="likes">
                                Likes
                            </div>
                            <div className="views">
                                Views
                            </div>
                            <div className="share">
                                Share
                            </div>
                        </div>
                    </div>

                </div>
                <div className="space-right">
                </div>


            </div >
        </>
    )
}

export default UserTweets