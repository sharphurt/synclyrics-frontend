import {LyricsType} from "../../../api/lyrics/LyricsType";
import {SyncedLyricsBadge} from "./SyncedLyricsBadge";
import {PlainLyricsBadge} from "./PlainLyricsBadge";

export const LyricsTypeBadge = (props) => {
    return <>
        {props.lyricsType === LyricsType.SYNCED && <SyncedLyricsBadge/>}
        {props.lyricsType === LyricsType.PLAIN && <PlainLyricsBadge/>}
    </>
}