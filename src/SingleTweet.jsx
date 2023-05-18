import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './singletweet.css'
import Footer from './components/tweets/Footer';
import { FaRegComment } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FiShare, FiBookmark } from "react-icons/fi";
import ProfileImage from './components/tweets/ProfileImage';
import UserComments from './components/UserComments';
import AddComment from './components/AddComment';

const SingleTweet = () => {
    const { id } = useParams();
    const [tweet, setTweet] = useState(null);
    const fetchTweet = async () => {
        const resp = await axios.get('https://react-workshop-todo.fly.dev/posts/' + id, {
            headers: {
                apikey: '6457383b7213f63d43544ac0'
            }
        });
        setTweet(resp.data.post)
    }
    useEffect(() => {
        fetchTweet();
    }, []);
    return (
        <>
            <div className="singletweet">
                <div className="singletweetleft">

                </div>
                <div className='eachtweet'>

                    {
                        tweet ?
                            <>

                                <img src={tweet.image} alt="Jersy" className='singletweetimage' />
                                <div className="singletweetfooter">
                                    <Footer commentcounts={2} likecountcounts={22} viewscounts={222} retweetcounts={22} />
                                </div>
                            </>
                            : null
                    }
                </div>
                {tweet ?
                    <>
                        <div className="comment-section">
                            <div className="singletweetcomments">
                                <div className="singletweetheader">
                                    <ProfileImage profilepic={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} />
                                    <div className='subheader'>
                                        <div className='headertext'>
                                            <p className='username'>{tweet.user.fullname} </p>
                                            <p className='singleusername'  >{'@' + tweet.user.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tweetcommentcontent">
                                    <p className="tweetcontent">{tweet.content}</p>
                                </div>

                                <div className="tweettime">2:44 AM · May 18, 2023 · 1M Views</div>
                                <div className="retweetsquotes">
                                    854 <span className='retweetsquoteslight'>Retweets </span>
                                    <span className='spacemiddle'></span>
                                    300 <span className='retweetsquoteslight'>Quotes</span>
                                </div>
                                <div className="retweetsquotes">
                                    26.8k <span className='retweetsquoteslight'>Likes </span>
                                    <span className='spacemiddle'></span>
                                    678 <span className='retweetsquoteslight'>Bookmarks</span>
                                </div>
                                <div className="commenticons">
                                    <p className="eachcommenticons">   <FaRegComment className='commenticon' /></p>
                                    <p className="eachcommenticons">   <AiOutlineRetweet className='commenticon' /></p>
                                    <p className="eachcommenticons">   <AiOutlineHeart className='commenticon' /></p>
                                    <p className="eachcommenticons">   <FiBookmark className='commenticon' /></p>
                                    <p className="eachcommenticons">   <FiShare className='commenticon' /></p>
                                </div>
                                <AddComment tweet={tweet} id={tweet._id} />
                            </div>

                        </div>


                    </>
                    : null}

            </div >
        </>
    )
}
export default SingleTweet