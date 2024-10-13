import {PlainLyricsIcon} from "../../../icons/PlainLyricsIcon";
import './PlainLyricsBadge.sass'

export const PlainLyricsBadge = () => {
    return <div className="plain-lyrics-badge">
        <PlainLyricsIcon/>
        <span className="sync-type-badge-caption">Слова синхронизированы</span>
    </div>
}