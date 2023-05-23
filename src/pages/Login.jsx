import React, { useState, useEffect } from 'react'
import './Login.css'
import { BsTwitter } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate();
    const [apikeys, setApiKeys] = useState([]);
    const [apikey, setApiKey] = useState('');

    //navigation to homepage
    const submitApiKey = () => {
        if (counter > 0) {
            navigate(`/home/:${apikey}`);
        }
        else {
            alert('Wrong Api Key');
        }
    }
    //for fetching apikey
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [users, setUser] = useState([]);
    const fetchTweets = async () => {
        const posts = await axios.get('https://react-workshop-todo.fly.dev/posts/all?limit=10', {
            headers: {
                apiKey: '6457383b7213f63d43544ac0'
            }
        });
        setUser(posts.data);
    };
    //useeffect
    useEffect(() => {
        fetchTweets();
    }, [shouldRefresh]);
    //pushing all of the apikeys to an array
    users.map(({ user }) => {
        apikeys.push(user._id);
    });
    //
    var counter = 0;
    for (var i = 0; i < apikeys.length - 1; i++) {
        if (apikey == apikeys[i]) {
            counter++;
        }
    }



    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <div className="login-container">
                        <div className="logo">
                            <BsTwitter />
                        </div>
                        <div className="signin-text">
                            Sign in to Twitter
                        </div>
                        <div className="google">
                            <button className="google-button">
                                Sign in with Google
                            </button>
                        </div>
                        <div className="apple">
                            <button className="apple-button">
                                Sign in with Apple

                            </button>

                        </div>
                        <div className="or">
                            <p className='leftline'></p>
                            or
                            <p className="rightline"></p>
                        </div>
                        <div className="apiKey">
                            <input type="text" name="" id="" placeholder='Enter your Api Key' value={apikey} onChange={(e) => setApiKey(e.target.value)} required />

                        </div>
                        <div className="loginButton">
                            <button className="login-button" onClick={submitApiKey}>
                                Log In
                            </button>

                        </div>
                        <div className="forget">
                            <button className="forget-button">
                                Forgot password?
                            </button>

                        </div>
                        <div className="signUp">
                            <p>Don’t have an account? <a href="">Sign up</a> </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login