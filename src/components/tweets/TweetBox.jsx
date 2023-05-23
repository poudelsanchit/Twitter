import InputTweet from './InputTweet';
import './tweetbox.css'
const TweetBox = ({ setShouldRefresh, tweetpostapikey, profileimage }) => {

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
                    <img src={profileimage[0]} className='profile-image' />

                </div>
                <InputTweet setShouldRefresh={setShouldRefresh} tweetpostapikey={tweetpostapikey} />
            </div>
        </div>
    )
}

export default TweetBox