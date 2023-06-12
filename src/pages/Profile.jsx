import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Menu from '../components/menu/Menu';
import Trends from '../components/trends/Trends';
import ProfileTweets from '../components/profile/ProfileTweets';
import { useParams } from 'react-router-dom';
import TweetHeader from '../components/tweets/TweetHeader';
import ProfileHeader from '../components/profile/ProfileHeader';
const Profile = () => {
    const [fullname, setFullName] = useState([]);
    const [profileimage, setProfileImage] = useState([]);
    const [username, setUserName] = useState([]);
    const { id } = useParams();
    const [users, setUser] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const fetchTweets = async () => {
        var newStr = id.substr(1, id.length - 1);  //here we got apikey with colon infront of it so using this code we can remove 1st character from the string
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

    users.map(({ user, image }) => {
        //if apikey from login is same to api key of the fetched data, we can get username of that individual user
        if (id.substr(1, id.length - 1) == user._id) {
            fullname.push(user.fullname);
            username.push(user.name);
            profileimage.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4')
        }
    });
    return (
        <>
            <div className='container'>
                <Menu apikey={id.substr(1, id.length - 1)} fullname={fullname[0]} profileimage={profileimage[0]} username={username[0]} />
                <div className="individualPost">
                    <ProfileHeader image={profileimage[0]} name={fullname[0]} username={username[0]} />

                    {users.map((data) => {
                        return <>
                            <ProfileTweets tweet={data.content} image={data.image} profilepic={'https://avatars.githubusercontent.com/u/' + data.user.githubId + '?v=4'} username={data.user.fullname} id={data._id} key={data.id} /></>
                    })}

                </div>

                <Trends />
            </div >
        </>
    )
}

export default Profile
