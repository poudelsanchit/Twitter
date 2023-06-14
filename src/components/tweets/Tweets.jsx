import React, { useEffect, useState } from 'react'
import UserTweets from './UserTweets'
import axios from 'axios';
import TweetBox from './TweetBox';
const Tweets = ({ newapikey, profileimage }) => {
    const [users, setUser] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const fetchTweets = async () => {
        const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
            headers: {
                apikey: `${newapikey}`
            }
        });
        setUser(posts.data);
    };
    useEffect(() => {
        fetchTweets();
    }, [shouldRefresh]);

    return (
        <>
            <div className="tweets">
                {/* tweetbox */}

                <TweetBox setShouldRefresh={setShouldRefresh} tweetpostapikey={newapikey} profileimage={profileimage} />
                {
                    users.map(({ user, content, image, _id, }) => {
                        return <UserTweets image={image} username={user.name} profilepic={'https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4'} tweettext={content} commentcounts={8} likecountcounts={7} retweetcounts={7} viewscounts={9} key={_id} id={_id} apikey={user._id} newapikey={newapikey} />
                    }
                    )
                }


            </div>
        </>
    )
}

export default Tweets