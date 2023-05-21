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
        let newStr = id.substr(1, id.length - 1);  //here we got apikey with colon infront of it so using this code we can remove 1st character from the string
        console.log(newStr);
        const posts = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${newStr}`, {
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
                <div className="individualPost">
                    {users.map((data) => {
                        return <ProfileTweets tweet={data.content} image={data.image} profilepic={'https://avatars.githubusercontent.com/u/' + data.user.githubId + '?v=4'} username={data.user.fullname} id={data._id} key={data.id} />
                    })}

                </div>

                <Trends />
            </div >
        </>
    )
}

export default Profile
