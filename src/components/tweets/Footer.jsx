import React from 'react'
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
const Footer = ({ commentcounts, likecountcounts, retweetcounts, viewscounts, }) => {
    return (
        <>
            <div className="commentsection">
                <div className="comments">
                    <FaRegComment />
                    <span className='commenttext'>{commentcounts}</span>
                </div>
                <div className="retweets">
                    <AiOutlineRetweet />
                    <span className='commenttext'>{retweetcounts}</span>

                </div>
                <div className="likes">
                    <AiOutlineHeart />
                    <span className='commenttext'>{likecountcounts}K</span>

                </div>
                <div className="views">
                    <FiBarChart2 />
                    <span className='commenttext'>{viewscounts}M</span>

                </div>
                <div className="share">
                    <FiShare />

                </div>
            </div>
        </>
    )
}

export default Footer