import React from 'react'
import UserTweets from './UserTweets'
const Tweets = () => {
    let users = [
        { username: 'hello' },

    ];

    return (
        <>
            <div className="tweets">

                <UserTweets username={'Real Madrid'} image={'https://cf.shopee.com.my/file/149ead55ea80fdeca6684db87965ba7e?fbclid=IwAR2LGDAt3HiuniVFjkwmbITL2WaaGr-EGenbOMQMIhB8pkBQD2L0I_N9uPQ'} profilepic='https://i.pinimg.com/564x/ce/0f/3f/ce0f3f36f9673ac76f8e29b00f7efce7.jpg' tweettext={'Real madrid designer kit'} />
                <UserTweets username={'Mia Khalifa'} image={'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg'} profilepic={'https://pbs.twimg.com/media/DVpKRidVoAAJ5Tb.jpg:large'} tweettext={'hellssssssssssssssssssssssssssssssssjhs'} />
                <UserTweets username={'Sanchit Poudel'} image={'https://sanchitpoudel.com.np/assets/image4.jpg'} profilepic={'https://lh3.googleusercontent.com/a/AGNmyxaKmIHxQ-rpNhsiP0o3yCwzNI54SDBKin1-WohpaQ=s360-c-no'} />
                <UserTweets username={'Cristiano Ronaldo'} image={'https://i.pinimg.com/originals/c6/e0/ed/c6e0ed7f8c62418a6d60e8f30895d5e9.jpg'} profilepic={'https://i.pinimg.com/originals/47/40/a2/4740a2a0e4dffb9c235da98de67268ec.jpg'} />

            </div>
        </>
    )
}

export default Tweets