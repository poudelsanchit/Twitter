import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserTweets from './components/tweets/UserTweets';
import './singletweet.css'
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
                <div className="tweetleftspace"></div>
                <div className='eachtweet'>
                    {
                        tweet ? <UserTweets tweettext={tweet.content} commentcounts={8} username={tweet.user.fullname} image={tweet.image} profilepic={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} key={tweet._id} id={id} /> : null
                    }
                </div>
                <div className="comments">
                    Hello
                </div>
            </div>
        </>
    )
}

export default SingleTweet