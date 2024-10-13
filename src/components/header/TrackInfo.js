import React, {useContext} from "react";
import './TrackInfo.sass'
import CoverButton from "./CoverButton";
import Skeleton from "react-loading-skeleton";
import {PlaybackState} from "../../api/playback/PlaybackState";
import {PlaybackContext} from "../../providers/PlaybackProvider";

const TrackInfo = () => {
    const context = useContext(PlaybackContext)

    const getCoverButton = () => {
        if (!context.coverUrl || !context.currentState) {
            return null
        }

        return context.currentState === PlaybackState.PLAY || context.currentState === PlaybackState.PAUSE
            ? <CoverButton currentState={context.currentState} coverUrl={context.coverUrl}/>
            : <></>
    }

    const getTrackName = () => {
        if (!context.trackName || !context.currentState) {
            return null
        }

        return context.currentState === PlaybackState.AD ? "Реклама" : context.trackName
    }

    const getTrackArtist = () => {
        if (!context.artist || !context.currentState) {
            return null
        }

        return context.currentState === PlaybackState.AD ? "Spotify" : context.artist
    }

    return <div className="track-info-container">
        {getCoverButton() || <Skeleton className="skeleton-avatar"/>}
        <div className="vertical-wrapper">
            <span className="track-name">
                {getTrackName() || <Skeleton className="skeleton-text"/>}
            </span>
            <span className="artist-name">
                {getTrackArtist() || <Skeleton className="skeleton-text"/>}
            </span>
        </div>
    </div>
}

export default TrackInfo