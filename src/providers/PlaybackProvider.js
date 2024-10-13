import {createContext, useContext, useEffect, useState} from "react";

import {AuthorizationContext} from "./AuthorizationProvider";
import {PlaybackState} from "../api/playback/PlaybackState";
import {getPlayback} from "../api/playback/GetPlayback";

export const PlaybackContext = createContext(null)

export const PlaybackProvider = ({children}) => {
    const authorizationContext = useContext(AuthorizationContext)
    const [playbackState, setPlaybackState] = useState({
        currentState: PlaybackState.OFFLINE,
        trackId: null,
        coverUrl: null,
        trackName: null,
        artist: null,
        album: null,
        progress: null
    })

    useEffect(() => {
        const interval = setInterval(() => {
            getPlayback(authorizationContext.accessToken).then(setPlaybackState)
        }, 300)
        return () => clearInterval(interval)
    }, [authorizationContext])

    return <PlaybackContext.Provider value={playbackState}>
        {children}
    </PlaybackContext.Provider>
}