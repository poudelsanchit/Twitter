import React from 'react'
import './usertweets.css'
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";

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
                                <FaRegComment />
                                <span className='commenttext'>3535</span>
                            </div>
                            <div className="retweets">
                                <AiOutlineRetweet />
                                <span className='commenttext'>1818</span>

                            </div>
                            <div className="likes">
                                <AiOutlineHeart />
                                <span className='commenttext'>17.9k</span>

                            </div>
                            <div className="views">
                                <FiBarChart2 />
                                <span className='commenttext'>3M</span>

                            </div>
                            <div className="share">
                                <FiShare />

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