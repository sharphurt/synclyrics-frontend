import {UrlConstants} from "../UrlConstants";
import {LyricsType} from "./LyricsType";

export const getLyrics = async (accessToken, trackName, artist, album) => {
    if (!accessToken) {
        return null
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            trackName: trackName,
            artistName: artist,
            albumName: album
        })
    };

    const response = await fetch(`${UrlConstants.LyricsUrl}/get`, requestOptions)
    const json = await response.json()
    return convertToState(json)
}

const convertToState = (json) => {
    return {
        lyricsType: getLyricsType(json),
        lyrics: getLyricsData(json)
    }
}

const getLyricsType = (data) => {
    if (data.syncedLyrics) {
        return LyricsType.SYNCED
    }

    if (data.plainLyrics) {
        return LyricsType.PLAIN
    }

    return LyricsType.NO_LYRICS
}

const getLyricsData = (data) => {
    if (data.syncedLyrics) {
        return data.syncedLyrics
    }

    if (data.plainLyrics) {
        return data.plainLyrics
    }

    return null
}