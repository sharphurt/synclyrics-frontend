import {SyncedLyricsIcon} from "../../../icons/SyncedLyricsIcon";
import './SyncedLyricsBadge.sass'

export const SyncedLyricsBadge = () => {
    return <div className="synced-lyrics-badge">
        <SyncedLyricsIcon/>
        <span className="sync-type-badge-caption">Слова синхронизированы</span>
    </div>
}