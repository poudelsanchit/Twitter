import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { CiHashtag, CiBookmark, CiTwitter, CiHome, CiBellOn, CiViewList, CiUser, CiCircleMore } from "react-icons/ci";
import ProfileImage from '../tweets/ProfileImage';


const Menu = () => {
    return (
        <>
            <div className="menu">
                <div className="menu1"></div>
                <div className="menu2">
                    <div className="items">
                        <CiTwitter className='icon' /><p className='text'> </p>
                    </div>
                    <div className="items">
                        <CiHome className='icon' /><p className='text'>Home</p>
                    </div>

                    <div className="items">
                        <CiHashtag className='icon' /><p className='text'>Explore</p>
                    </div>
                    <div className="items">
                        <CiBellOn className='icon' /><p className='text'>Notifications</p>
                    </div>
                    <div className="items">
                        <AiOutlineMessage className='icon' /><p className='text'>Messages</p>
                    </div>
                    <div className="items">
                        <CiViewList className='icon' /><p className='text'>Lists</p>
                    </div>
                    <div className="items">
                        <CiBookmark className='icon' /><p className='text'>Bookmarks</p>
                    </div>
                    <div className="items">
                        <CiUser className='icon' /><p className='text'>Profile</p>
                    </div>
                    <div className="items">
                        <CiCircleMore className='icon' /><p className='text'>More</p>
                    </div>

                    <div className="items">
                        <p className="icon profileicon">
                            <ProfileImage profilepic={'https://pbs.twimg.com/profile_images/1526927042033250304/TJqo3n55_400x400.jpg'} />
                        </p>
                        <div className='text profiletext'>
                            <p className='profilename'>Sanchit Poudel</p>
                            <p className='profileusername'>@PoudelSanchit</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Menu