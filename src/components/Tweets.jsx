import React from 'react'
import UserTweets from './UserTweets'
const Tweets = () => {
    let users = [
        {
            username: 'Real Madrid',
            image: 'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e?fbclid=IwAR2LGDAt3HiuniVFjkwmbITL2WaaGr-EGenbOMQMIhB8pkBQD2L0I_N9uPQ',
            profilepic: 'https://i.pinimg.com/564x/fa/4f/0d/fa4f0db883d36fbfcfe76c06d9012be0.jpg',
            tweettext: 'Real madrid designer kit'
        },

        {
            username: 'Cristiano Ronaldo',
            image: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
            profilepic: 'https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg',
            tweettext: 'Siuuuuuuu'


        },

        {
            username: 'Sanchit Poudel',
            image: 'https://sanchitpoudel.com.np/assets/image4.jpg',
            profilepic: 'https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg',
            tweettext: 'wassuppp.'
        },
        {
            username: 'Mia Khalifa',
            image: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg',
            profilepic: 'https://pbs.twimg.com/media/DVpKRidVoAAJ5Tb.jpg:large',
            tweettext: 'Feeling Good (You know what I am talking about Daddy)'
        }
    ];

    return (
        <>
            <div className="tweets">
                {
                    users.map(({ username, image, profilepic, tweettext }) => {
                        return <UserTweets image={image} username={username} profilepic={profilepic} tweettext={tweettext} />
                    }
                    )
                }


            </div>
        </>
    )
}

export default Tweets