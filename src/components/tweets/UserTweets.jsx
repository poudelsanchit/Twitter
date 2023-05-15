import React from 'react'
import './usertweets.css'
import Footer from './Footer';
import TweetImage from './Image';
import TweetHeader from './TweetHeader';

const UserTweets = ({ username, image, tweettext, profilepic, commentcounts, likecountcounts, retweetcounts, viewscounts, id }) => {
    return (
        <>
            <div className="card ">
                <div className="space-left">
                </div>
                <div className='content'>
                    <img src={profilepic} alt="Jersy" className='profile-image' id='profilepic' />
                    <div className="mainheader">
                        <TweetHeader tweettext={tweettext} username={username} />
                        <TweetImage image={image} />
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