import React from 'react'
import './profiletweets.css'
import ProfileImage from '../tweets/ProfileImage'
import TweetHeader from '../tweets/TweetHeader'
import Footer from '../tweets/Footer'
import TweetImage from '../tweets/Image'
import ProfileHeader from './ProfileHeader'
const ProfileTweets = ({ tweet, image, profilepic, username, id }) => {

    return (
        <>
            <div className="card">
                <div className="space-left">
                </div>
                <div className='content'>
                    <ProfileImage profilepic={profilepic} key={0} />
                    <div className="mainheader">
                        <TweetHeader tweettext={tweet} username={username} id={id} key={1} />
                        <TweetImage image={image} id={'78'} key={2} />
                        <Footer commentcounts={'78'} likecountcounts={'678'} retweetcounts={'89'} viewscounts={'877'} id={'23'} key={3} />
                    </div>
                </div>
                <div className="space-right">
                </div>
            </div>
        </>
    )
}

export default ProfileTweets