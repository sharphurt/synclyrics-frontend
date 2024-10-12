import {LyricsType} from "../../api/lyrics/LyricsType";
import {useEffect, useRef} from "react";
import './LyricsWrapper.sass'

export const LyricsWrapper = (props) => {
    const currentLineRef = useRef()

    const noLyricsMessage = () => {
        return <div className="no-lyrics-message">
            <span>К этому треку пока нет текста</span>
        </div>
    }

    const lyricsLines = (item, index) => {
        return <span id={index}
                     key={index}
                     ref={props.currentLine === index ? currentLineRef : null}
                     className={`lyrics-line ${props.currentLine === index ? 'current-line' : ''}`}
                     data-time={item.time}>
            {item.text}
        </span>
    }

    useEffect(() => {
        currentLineRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, [props.currentLine]);

    useEffect(() => {
        currentLineRef.current?.scrollTo(0, 0);
    }, [props.lyrics]);

    return <div className="lyrics-wrapper">
        {props.lyricsType === LyricsType.NO_LYRICS && noLyricsMessage()}
        {props.lyricsType !== LyricsType.NO_LYRICS && props.lyrics.map(lyricsLines)}
    </div>
}
