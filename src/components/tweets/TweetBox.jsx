import InputTweet from './InputTweet';
import './tweetbox.css'
const TweetBox = ({ setShouldRefresh }) => {

    return (
        <div className='tweetbox'>
            <div className="tweetboxheader">
                <div className='tweethome'>
                    <p className='tweethometext'>
                        Home
                    </p>
                </div>
            </div>
            <div className="tweetboxmain">
                <div className="tweetboximage">
                    <img src='https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg' className='profile-image' />

                </div>
                <InputTweet setShouldRefresh={setShouldRefresh} />
            </div>
        </div>
    )
}

export default TweetBox