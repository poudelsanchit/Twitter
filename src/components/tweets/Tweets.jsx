import React, { useEffect, useState } from 'react'
import UserTweets from './UserTweets'
import axios from 'axios';
import TweetBox from './TweetBox';
const Tweets = () => {
    const [users, setUser] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const fetchTweets = async () => {
        const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all?limit=100", {
            headers: {
                apikey: '6457383b7213f63d43544ac0'
            }
        });
        setUser(posts.data);
        console.log(users);
    };
    useEffect(() => {
        fetchTweets();
    }, [shouldRefresh]);
    // let users = [
    //     {
    //         username: 'Real Madrid',
    //         image: 'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e?fbclid=IwAR2LGDAt3HiuniVFjkwmbITL2WaaGr-EGenbOMQMIhB8pkBQD2L0I_N9uPQ',
    //         profilepic: 'https://i.pinimg.com/564x/fa/4f/0d/fa4f0db883d36fbfcfe76c06d9012be0.jpg',
    //         tweettext: 'Real madrid designer kit',
    //         commentcounts: 976,
    //         retweetcounts: 567,
    //         likecountcounts: 900,
    //         viewscounts: 6,


    //     },

    //     {
    //         username: 'Cristiano Ronaldo',
    //         image: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
    //         profilepic: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
    //         tweettext: 'Siuuuuuuu',
    //         commentcounts: 6765,
    //         retweetcounts: 232,
    //         likecountcounts: 600,
    //         viewscounts: 6,



    //     },

    //     {
    //         username: 'Sanchit Poudel',
    //         image: 'https://sanchitpoudel.com.np/assets/image4.jpg',
    //         profilepic: 'https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg',
    //         tweettext: 'wassuppp.',
    //         commentcounts: 6001,
    //         retweetcounts: 442,
    //         likecountcounts: 86,
    //         viewscounts: 6,

    //     },
    //     {
    //         username: 'Mia Khalifa',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
    //         profilepic: 'https://pbs.twimg.com/media/DVpKRidVoAAJ5Tb.jpg:large',
    //         tweettext: 'Feeling Good (You know what I am talking about Daddy)',
    //         commentcounts: 8765,
    //         retweetcounts: 654,
    //         likecountcounts: 342,
    //         viewscounts: 9,

    //     }
    // ];

    return (
        <>
            <div className="tweets">
                {/* tweetbox */}

                <TweetBox />





                {
                    users.map(({ user, content, image, _id }) => {
                        return <UserTweets image={image} username={user.name} profilepic={image} tweettext={content} commentcounts={8} likecountcounts={7} retweetcounts={7} viewscounts={9} key={_id} />
                    }
                    )
                }


            </div>
        </>
    )
}

export default Tweets