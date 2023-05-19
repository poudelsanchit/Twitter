import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Menu from '../components/menu/Menu';
import Trends from '../components/trends/Trends';
import ProfileTweets from '../components/profile/ProfileTweets';
import { useParams } from 'react-router-dom';
const Profile = () => {
    const { id } = useParams();
    const [users, setUser] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const fetchTweets = async () => {
        const posts = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/6457383b7213f63d43544ac0`, {
            headers: {
                apikey: '6457383b7213f63d43544ac0'
            }
        });
        setUser(posts.data);
    };
    useEffect(() => {
        fetchTweets();
    }, [shouldRefresh]);

    return (
        <>
            <div className='container'>
                <Menu />
                {users.map((data) => {
                    return <ProfileTweets tweet={data.content} />

                })}
                <Trends />
            </div >
        </>
    )
}

export default Profile
