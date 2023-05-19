import React from 'react'

function TweetHeader({ username, tweettext }) {
    return (
        <>

            <div className='subheader'>
                <div className='headertext'>
                    <p className='username'>{username} </p>
                    <p className='tweettext'  >{tweettext}</p>
                </div>
            </div>
        </>
    )
}

export default TweetHeader