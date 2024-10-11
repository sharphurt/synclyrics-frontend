import {useState} from "react";
import LyricsType from "../context/lyrics/LyricsType";
import LyricsPage from "../page/LyricsPage";

const LyricsDisplay = (props) => {

    const [currentLine, setCurrentLine] = useState(0)

    const lyricsString = (id, text, time) => {
        return <span id={id} className="lyrics-line" data-time={time}>{text}</span>
    }

    const renderLyrics = () => {
        switch (props.lyricsType) {
            case LyricsType.SYNCED:
                return props.lyrics.map((item, index) => lyricsString(index, item.text, item.milliseconds))
            case LyricsType.PLAIN:
                return props.lyrics.map((item, index) => lyricsString(index, item, null))
            case LyricsType.NO_LYRICS:
                return renderNoLyricsMessage()
        }
    }

    const renderNoLyricsMessage = () => {
        return <div className="no-lyrics-message">
            <span>К этому треку пока нет текста</span>
        </div>
    }

    return <div className="lyrics-wrapper" data-lyrics-type={props.lyricsType}>{renderLyrics()}</div>
}