import React from "react";
import './LyricsPage.sass'
import {AllProviders} from "../providers/AllProviders";
import PageHeader from "../components/header/PageHeader";
import LyricsDisplay from "../components/lyrics/LyricsDisplay";

const LyricsPage = () => {
    return <div className="page-container">
        <AllProviders>
            <PageHeader/>
            <LyricsDisplay/>
        </AllProviders>
    </div>
}

export default LyricsPage