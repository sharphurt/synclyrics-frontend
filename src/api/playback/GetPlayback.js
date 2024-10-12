import {UrlConstants} from "../UrlConstants";
import {PlaybackState} from "./PlaybackState";
import {getImageLink} from "../ApiUtils";

export const getPlayback = async (accessToken) => {
    if (!accessToken) {
        return null
    }

    const requestOptions = {
        method: 'GET',
        headers: {'Authorization': `Bearer ${accessToken}`}
    };

    const response = await fetch(`${UrlConstants.SpotifyUrl}/me/player`, requestOptions)
    const json = await response.json()
    return convertToState(json)
}

const convertToState = (json) => {
    return {
        currentState: getCurrentState(json.currently_playing_type, json.is_playing),
        trackId: json.item?.id ?? '',
        artist: (json.item?.artists ?? []).map(artist => artist.name).join(', '),
        album: json.item?.album.name ?? '',
        trackName: json.item?.name ?? '',
        coverUrl: getImageLink(json.item?.album.images),
        progress: json.progress_ms ?? 0
    }
}

export const getCurrentState = (spotifyPlayingType, isPlaying) => {
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
