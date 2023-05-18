import React from 'react'

const ProfileImage = ({ profilepic }) => {
    return (
        <img src={profilepic} alt="Jersy" className='profile-image' id='profilepic' />
    )
}

export default ProfileImage