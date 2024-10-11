import React, {useContext} from "react";
import PlaybackState from "../context/playback/PlaybackState";
import './TrackInfo.sass'
import CoverButton from "./CoverButton";
import {useSelector} from "react-redux";

const TrackInfo = () => {
    const playbackData = useSelector((state) => state.playback)

    return <div className="track-info-container">
        {
            playbackData.currentState !== PlaybackState.AD
            && <CoverButton currentState={playbackData.currentState} coverUrl={playbackData.trackData.coverUrl}/>
        }

        <div className="vertical-wrapper">
            <span className="track-name">
                {playbackData.currentState === PlaybackState.AD ? "Реклама" : playbackData.trackData.trackName}
            </span>

            <span className="artist-name">
                {playbackData.currentState === PlaybackState.AD ? "Spotify" : playbackData.trackData.artist}
            </span>
        </div>
    </div>
}

export default TrackInfo