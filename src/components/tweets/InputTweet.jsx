import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const InputTweet = ({ setShouldRefresh }) => {
    const [tweetContent, setTweetContent] = useState('');
    const upload = async () => {
        try {
            axios.post(`https://react-workshop-todo.fly.dev/posts/`, {
                content: tweetContent,
                image: 'https://sanchitpoudel.com.np/assets/image4.jpg',
            }, {
                headers: {
                    apiKey: '6457383b7213f63d43544ac0'
                },
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            alert(e);
        }

    }
    const handleSubmit = () => {
        upload();
    }


    return (
        <>
            <div className="tweetboxform">
                <input type="text" id="tweetinput" placeholder="What is happening?!" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} />
                <div className="tweetbutton">
                    <button className="button" onClick={handleSubmit}>Tweet</button>

                </div>
            </div>
        </>
    )
}

export default InputTweet