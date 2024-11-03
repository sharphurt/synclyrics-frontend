import {useContext, useEffect, useState} from "react";
import {PlaybackContext} from "../../providers/PlaybackProvider";
import {LyricsType} from "../../api/lyrics/LyricsType";
import {LyricsWrapper} from "./LyricsWrapper";
import {getLyrics} from "../../api/lyrics/GetLyrics";
import {findLyricsLine} from "../../util/lyrics/findLyricsLine";
import './LyricsDisplay.sass'
import {LyricsControlPanel} from "./LyricsControlPanel";

const LyricsDisplay = () => {
    const playback = useContext(PlaybackContext)

    const [lyricsData, setLyricsData] = useState(null)
    const [currentLine, setCurrentLine] = useState(null)

    useEffect(() => {
        if (playback.trackId) {
            getLyrics(playback.trackName, playback.artist, playback.album).then(data => setLyricsData(data))
        }
    }, [playback.trackId]);

    useEffect(() => {
        if (lyricsData && lyricsData.lyrics && lyricsData.lyricsType === LyricsType.SYNCED) {
            const currentLine = findLyricsLine(lyricsData.lyrics, playback.progress)
            setCurrentLine(currentLine)
        }
    }, [playback.progress]);

    return <div className="lyrics-display">
        {lyricsData && <>
            <LyricsControlPanel lyricsType={lyricsData.lyricsType}/>
            <LyricsWrapper
                lyricsType={lyricsData.lyricsType}
                lyrics={lyricsData.lyrics}
                currentLine={currentLine}/>
        </>}
    </div>
}


export default LyricsDisplay