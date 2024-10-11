import React from "react";
import './ProfileInfo.sass'
import {useSelector} from "react-redux";

const ProfileInfo = () => {
    const profileData = useSelector((state) => state.profile)

    return <div className="profile-container">
        <img className="profile-image" src={profileData.user.profileImageUrl} alt="User avatar"/>
        <div className="profile-info-wrapper">
            <span className="user-name">{profileData.user.username}</span>
            <span className="user-id">{profileData.user.id}</span>
        </div>
    </div>
}

export default ProfileInfo