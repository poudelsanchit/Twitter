import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './singletweet.css'
import Footer from './components/tweets/Footer';
const SingleTweet = () => {
    const { id } = useParams();
    const [tweet, setTweet] = useState(null);
    const fetchTweet = async () => {
        const resp = await axios.get('https://react-workshop-todo.fly.dev/posts/' + id, {
            headers: {
                apikey: '6457383b7213f63d43544ac0'
            }
        });
        setTweet(resp.data.post)
    }
    useEffect(() => {
        fetchTweet();
    }, []);
    return (
        <>
            <div className="singletweet">
                <div className="singletweetleft">
                    
                </div>
                <div className='eachtweet'>

                    {
                        tweet ?
                            <>

                                <img src={tweet.image} alt="Jersy" className='singletweetimage' />
                                <div className="singletweetfooter">
                                    <Footer commentcounts={2} likecountcounts={22} viewscounts={222} retweetcounts={22} />
                                </div>
                            </>
                            : null
                    }
                </div>
                <div className="comments1">
                    Hello
                </div>
            </div>
        </>
    )
}

export default SingleTweet