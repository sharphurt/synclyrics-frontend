const PlaybackState = {
    PLAY: "PLAY",
    PAUSE: "PAUSE",
    OFFLINE: "OFFLINE",
    AD: "AD",
}

export const convertSpotifyToPlaybackState = (spotifyPlayingType, isPlaying) => {
    switch (spotifyPlayingType) {
        case "track":
            return isPlaying ? PlaybackState.PLAY : PlaybackState.PAUSE
        case "ad":
            return PlaybackState.AD
        case "episode":
        case "unknown":
        default:
            return PlaybackState.OFFLINE
    }
}

export default PlaybackState