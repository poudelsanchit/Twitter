import React, { useState } from 'react'
import './Login.css'
import { BsTwitter } from 'react-icons/bs'

const Login = () => {
    const [apikey, setApiKey] = useState('');
    const submitApiKey = () => {
        console.log(apikey);
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