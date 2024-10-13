import React from "react";
import './CoverButton.sass'
import {PauseIcon} from "../../icons/PauseIcon";
import {PlayIcon} from "../../icons/PlayIcon";
import {PlaybackState} from "../../api/playback/PlaybackState";

const CoverButton = (props) => {
    const getButtonIcon = () => {
        if (props.currentState === PlaybackState.OFFLINE || props.currentState === PlaybackState.AD) {
            return <></>
        }

        return props.currentState === PlaybackState.PLAY ? <PauseIcon/> : <PlayIcon/>
    }

    return <div className="cover-container" style={{backgroundImage: `url(${props.coverUrl}`}}>
        <button className="cover-button" data-state={props.currentState}>
            {getButtonIcon()}
        </button>
    </div>
}

export default CoverButton