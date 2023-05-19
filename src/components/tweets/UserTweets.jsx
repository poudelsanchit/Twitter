import React from 'react'
import './usertweets.css'
import Footer from './Footer';
import TweetImage from './Image';
import TweetHeader from './TweetHeader';
import ProfileImage from './ProfileImage';

const UserTweets = ({ username, image, tweettext, profilepic, commentcounts, likecountcounts, retweetcounts, viewscounts, id }) => {
    return (
        <>
            <div className="card ">
                <div className="space-left">
                </div>
                <div className='content'>
                    <ProfileImage profilepic={profilepic} />
                    <div className="mainheader">
                        <TweetHeader tweettext={tweettext} username={username} />
                        <TweetImage image={image} id={id} />
                        <Footer commentcounts={commentcounts} likecountcounts={likecountcounts} retweetcounts={retweetcounts} viewscounts={viewscounts} id={id} />
                    </div>
                </div>
                <div className="space-right">
                </div>


            </div >
        </>
    )
}

export default UserTweets