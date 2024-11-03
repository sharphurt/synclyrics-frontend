import {AllProviders} from "../providers/AllProviders";
import PageHeader from "../components/header/PageHeader";
import React from "react";
import KaraokeDisplay from "../components/karaoke/KaraokeDisplay";

export const TestPage = () => {
    return <div className="page-container">
        <AllProviders>
            <PageHeader/>
            <KaraokeDisplay/>
        </AllProviders>
    </div>
}