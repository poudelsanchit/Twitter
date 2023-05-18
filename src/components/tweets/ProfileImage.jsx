import React from 'react'

const ProfileImage = ({ profilepic }) => {
    return (
        <img src={profilepic} className='profile-image' id='profilepic' />
    )
}

export default ProfileImage