import React, { useState } from 'react'
import './usertweets.css'
import Footer from './Footer';
import TweetImage from './Image';
import TweetHeader from './TweetHeader';
import ProfileImage from './ProfileImage';
import { FiMoreHorizontal, FiTrash, FiShare } from "react-icons/fi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserTweets = ({ username, image, tweettext, profilepic, commentcounts, likecountcounts, retweetcounts, viewscounts, id, apikey, newapikey }) => {
    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate(`/profile/:${apikey}`);
    }
    const [openDropdown, setOpenDropdown] = useState(false);
    //delete post
    const handleDeletePost = async () => {
        try {
            await axios.delete(`https://react-workshop-todo.fly.dev/posts/${id}`, {
                headers: {
                    apiKey: `${newapikey}`
                }
            });
            alert('Post deleted sucessfully.')
        }
        catch (e) {
            alert(e);
        }
    }


    return (
        <>
            <div className="card ">
                <div className="space-left">
                </div>
                <div className='content'>
                    <a onClick={navigateToProfile}>  <ProfileImage profilepic={profilepic} /></a>

                    <div className="mainheader">
                        <TweetHeader tweettext={tweettext} username={username} id={id} apikey={apikey} />
                        <TweetImage image={image} id={id} newapikey={newapikey} />
                        <Footer commentcounts={commentcounts} likecountcounts={likecountcounts} retweetcounts={retweetcounts} viewscounts={viewscounts} id={id} newapikey={newapikey} />
                    </div>
                </div>
                <div className="space-right">
                    <div className="tweetsmore">
                        <FiMoreHorizontal className='moreicon' onClick={() => setOpenDropdown((value) => !value)} />
                    </div>
                    {openDropdown &&
                        <div id="myDropdown" className='dropdown'>
                            <li><FiTrash className='delete-tweet' onClick={handleDeletePost} /></li>
                            <li><FiShare /></li>
                        </div>

                    }

                </div>
            </div >

        </>
    )
}

export default UserTweets