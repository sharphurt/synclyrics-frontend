import React from "react";
import './LyricsPage.sass'
import PageHeader from "../components/PageHeader";
import {AllProviders} from "../provider/AllProviders";
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