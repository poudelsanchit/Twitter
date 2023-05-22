import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegComment } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
const Footer = ({ commentcounts, likecountcounts, retweetcounts, viewscounts, id, newapikey }) => {
    const navigate = useNavigate();
    const navigateToTweet = () => {
        navigate(`/tweet/${id}/${newapikey}`);

    }

    return (
        <>
            <div className="commentsection">
                <div className="comments" onClick={navigateToTweet}>
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
    );
}

export default Footer