import React, {useContext, useEffect, useState} from "react";
import './ProfileInfo.sass'
import Skeleton from "react-loading-skeleton";
import {AuthorizationContext} from "../../providers/AuthorizationProvider";
import {getUserInfo} from "../../api/user/GetUserInfo";

const ProfileInfo = () => {
    const authorizationContext = useContext(AuthorizationContext)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        getUserInfo(authorizationContext.accessToken).then(data => setUserInfo(data))
    }, [authorizationContext]);

    const profileImage = (url) => {
        if (url) {
            return <img className="profile-image" src={url} alt="User avatar"/>
        }

        return null
    }

    return <div className="profile-container">
        {profileImage(userInfo?.profileImageUrl) || <Skeleton className="skeleton-avatar"/>}
        <div className="profile-info-wrapper">
            <span className="user-name">{userInfo?.username || <Skeleton className="skeleton-text"/>}</span>
            <span className="user-id">{userInfo?.id || <Skeleton className="skeleton-text"/>}</span>
        </div>
    </div>

}

export default ProfileInfo