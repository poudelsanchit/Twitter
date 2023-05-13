import './tweetbox.css'
import { useState } from 'react';
const TweetBox = () => {
    const [tweetContent, setTweetContent] = useState('');
    const handleSubmit = () => {
        console.log(tweetContent)
    }
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
                    <img src='https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg' alt="Jersy" className='profile-image' />

                </div>
                <div className="tweetboxform">
                    <input type="text" id="tweetinput" placeholder="What is happening?!" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} />
                    <div className="tweetbutton">
                        <button className="button" onClick={handleSubmit}>Tweet</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetBox