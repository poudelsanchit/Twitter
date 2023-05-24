import Menu from '../components/menu/Menu'
import Tweeets from '../components/tweets/Tweets'
import Trends from '../components/trends/Trends'
import '../App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Home = () => {
  const { apikey } = useParams();
  const [fullname, setFullName] = useState([]);
  const [profileimage, setProfileImage] = useState([]);
  const [username, setUserName] = useState([]);

  let newapikey = apikey.substr(1, apikey.length - 1);

  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [users, setUser] = useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get('https://react-workshop-todo.fly.dev/posts/all?limit=10', {
      headers: {
        apiKey: `645bdf48b4900dc4571ac6aa`
      }
    });
    setUser(posts.data);
  };
  //useeffect
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  //pushing all of the apikeys to an array
  users.map(({ user, image }) => {
    //if apikey from login is same to api key of the fetched data, we can get username of that individual user
    if (newapikey == user._id) {
      fullname.push(user.fullname);
      username.push(user.name);
      profileimage.push('https://avatars.githubusercontent.com/u/' + user.githubId + '?v=4')
    }
  });

  return (
    <>
      <div className='container'>
        <Menu fullname={fullname[0]} profileimage={profileimage[0]} username={username[0]} apikey={newapikey} />
        <Tweeets newapikey={newapikey} profileimage={profileimage} />
        <Trends />
      </div >
    </>
  )
}

export default Home
