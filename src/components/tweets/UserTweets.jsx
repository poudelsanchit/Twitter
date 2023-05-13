import React from 'react'
import './usertweets.css'

import Footer from './Footer';

const UserTweets = ({ username, image, tweettext, profilepic, commentcounts, likecountcounts, retweetcounts, viewscounts, id }) => {
    return (
        <>
            <div className="card ">
                <div className="space-left">
                </div>
                <div className='content'>
                    <img src={profilepic} alt="Jersy" className='profile-image' id='profilepic' />
                    <div className="mainheader">
                        <div className='subheader'>
                            <div className='headertext'>
                                <p className='username'>{username} </p>
                                <p className='tweettext'  >{tweettext}</p>
                            </div>
                        </div>
                        <div className="image">
                            <img src={image} alt="Jersy" className='img' />
                        </div>
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