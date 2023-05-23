import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProfileImage from './tweets/ProfileImage'
const UserComments = ({ id }) => {
    //fetching data through API
    const [comments, getComments] = useState([]);

    const fetchCommentsContent = async () => {
        try {
            const comments = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`, {
                headers: {
                    apiKey: '6457383b7213f63d43544ac0',
                },
            });
            getComments(comments.data.post.comments);
        } catch (error) {
            console.log(error);
        }
    };
    //useEffect
    useEffect(() => {
        fetchCommentsContent();
    }, []);

    return (
        <>
            {comments.map((data) => (
                <>
                    <div className="individualcomments">
                        <div className="tweetboximage">
                            <ProfileImage profilepic={'https://avatars.githubusercontent.com/u/' + data.user.githubId + '?v=4'} className='profile-image' />
                        </div>
                        <div className="commenttextheader">
                            <p className='comment-fullname'> {data.user.fullname}</p>
                            <p className='comment-content'>{data.content}</p>
                        </div>


                    </div >
                </>


            ))}


        </>
    )
}

export default UserComments