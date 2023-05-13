import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserTweets from '../components/tweets/UserTweets';

const SingleTweet = () => {
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
            {
                tweet ? <UserTweets tweettext={tweet.content} commentcounts={8} username={tweet.user.fullname} image={tweet.image} profilepic={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} key={tweet._id} id={id} /> : null
            }
        </>
    )
}

export default SingleTweet