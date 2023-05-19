import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProfileImage from '../tweets/ProfileImage'
const AddComment = ({ tweet, id }) => {
    //upload functions
    const [comment, setCommentContent] = useState('');
    const handleCommentSubmit = () => {
        upload();
    };
    //uploading data to API
    const upload = async () => {
        try {
            await axios.post(
                `https://react-workshop-todo.fly.dev/posts/${id}/comments`,
                {
                    content: comment,
                },
                {
                    headers: {
                        apiKey: '6457383b7213f63d43544ac0',
                    },
                }
            );
            setCommentContent("");
        } catch (error) {
            console.log(error);
            alert('Error Found');
        }
    };


    return (
        <>
            <div className="replytweetsmain">
                <div className="replytweets">
                    <div className="replytweetimage">
                        <ProfileImage profilepic={'https://avatars.githubusercontent.com/u/50201318?v=4'} />
                    </div>
                    <div className='replytweetform'>
                        <input type="text" id="tweetinput2" placeholder="Tweet your reply!" required="" value={comment} onChange={(e) => setCommentContent(e.target.value)} />
                    </div>
                </div>
                <div className="replybutton">
                    <button className="button" onClick={handleCommentSubmit} >Reply</button>
                </div>
            </div>

        </>
    )
}

export default AddComment