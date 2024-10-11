import {convertSpotifyToPlaybackState} from "./PlaybackState";

export const createStateFromSpotifyData = (data) => {
    return {
        currentState: convertSpotifyToPlaybackState(data.currently_playing_type, data.is_playing),
        trackData: {
            id: data.item?.id ?? '',
            artist: (data.item?.artists ?? []).map(artist => artist.name).join(', '),
            album: data.item?.album.name ?? '',
            trackName: data.item?.name ?? '',
            coverUrl: getCoverLink(data.item?.album.images)
        },
        progress: data.progress_ms ?? 0
    }
}

export const getCoverLink = (albumImages) => {
    if (!albumImages || albumImages?.length === 0) {
        return ''
    }

    return albumImages?.filter(e => e.width < 512)[0].url ?? albumImages[0].url
}