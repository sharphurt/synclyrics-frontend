import {useContext, useEffect, useState} from "react";
import {PlaybackContext} from "../../provider/PlaybackProvider";
import {LyricsType} from "../../api/lyrics/LyricsType";
import {AuthorizationContext} from "../../provider/AuthorizationProvider";
import {LyricsWrapper} from "./LyricsWrapper";
import {getLyrics} from "../../api/lyrics/GetLyrics";
import {findLyricsLine} from "../../api/lyrics/FindLyricsLine";
import './LyricsDisplay.sass'

const LyricsDisplay = () => {
    const playback = useContext(PlaybackContext)
    const authorization = useContext(AuthorizationContext)

    const [lyricsData, setLyricsData] = useState(null)
    const [currentLine, setCurrentLine] = useState(null)

    useEffect(() => {
        if (playback.trackId) {
            getLyrics(authorization.accessToken, playback.trackName, playback.artist, playback.album).then(data => setLyricsData(data))
        }
    }, [playback.trackId]);

    useEffect(() => {
        if (lyricsData && lyricsData.lyrics && lyricsData.lyricsType === LyricsType.SYNCED) {
            const currentLine = findLyricsLine(lyricsData.lyrics, playback.progress)
            setCurrentLine(currentLine)
        }
    }, [playback.progress]);

    return <div className="lyrics-display">
        {lyricsData && <LyricsWrapper
            lyricsType={lyricsData.lyricsType}
            lyrics={lyricsData.lyrics}
            currentLine={currentLine}/>
        }
    </div>
}


export default LyricsDisplay