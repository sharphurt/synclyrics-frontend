import React from 'react';
import TrackInfo from "./TrackInfo";
import './PageHeader.sass'
import Search from "./Search";
import ProfileInfo from "./ProfileInfo";

const PageHeader = () => {
    return <header className="header-section">
        <TrackInfo/>
        <Search/>
        <ProfileInfo/>
    </header>
}

export default PageHeader;