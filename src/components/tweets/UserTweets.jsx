import React, { useState } from 'react'
import './usertweets.css'
import Footer from './Footer';
import TweetImage from './Image';
import TweetHeader from './TweetHeader';
import ProfileImage from './ProfileImage';
import { FiMoreHorizontal, FiTrash, FiShare } from "react-icons/fi";
import { Prev } from 'react-bootstrap/esm/PageItem';

const UserTweets = ({ username, image, tweettext, profilepic, commentcounts, likecountcounts, retweetcounts, viewscounts, id }) => {
    const [openDropdown, setOpenDropdown] = useState(false);

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
                    <div className="tweetsmore">
                        <FiMoreHorizontal className='moreicon' onClick={() => setOpenDropdown((value) => !value)} />
                    </div>
                    {openDropdown &&
                        <div id="myDropdown" className='dropdown'>
                            <FiTrash className='delete-tweet' />
                            <FiShare />
                        </div>

                    }

                </div>
            </div >

        </>
    )
}

export default UserTweets