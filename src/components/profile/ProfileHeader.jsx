import React from 'react'
import ProfileImage from '../tweets/ProfileImage'
import { BiArrowBack } from 'react-icons/bi'
const ProfileHeader = ({ name, username, image }) => {
    return (
        <div className='profile-header'>
            <div className="backbutton"><BiArrowBack style={{ cursor: 'pointer' }} size={20} /></div>
            <div className='profile-header-content'>
                <img src={image} alt="" className="profile-header-image" />
                <div className='profiletext'>
                    <p className='profilename'>{name}</p>
                    <p className='profileusername'>@{username}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader