import React from 'react'

const TweetImage = ({ image }) => {
    return (
        <>
            <div className="image">
                <img src={image} alt="Jersy" className='img' />
            </div>
        </>
    )
}

export default TweetImage