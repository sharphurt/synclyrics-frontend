import {LyricsTypeBadge} from "./lyricsTypeBadge/LyricsTypeBadge";
import {DropdownSelect} from "../common/DropdownSelect";
import {OpenFullscreenIcon} from "../../icons/OpenFullscreenIcon";
import {useState} from "react";
import {SwitchIconButton} from "../common/SwitchIconButton";
import {CloseFullscreenIcon} from "../../icons/CloseFullscreenIcon";
import './LyricsControlPanel.sass'

export const LyricsControlPanel = (props) => {
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [scale, setScale] = useState(1)

    const scaleOptions = [
        {value: 0.5, name: '50%'},
        {value: 1, name: '100%'},
        {value: 1.5, name: '150%'},
        {value: 2, name: '200%'},
    ]

    const onScaleChange = (value) => {
        setScale(value)
        console.log(value)
    }

    return <div className="lyrics-control-panel">
        <LyricsTypeBadge lyricsType={props.lyricsType}/>
        <div className="controls-wrapper">
            <DropdownSelect options={scaleOptions} defaultValue={2} onSelect={onScaleChange}/>
            <SwitchIconButton uncheckedStateIcon={<OpenFullscreenIcon/>}
                              checkedStateIcon={<CloseFullscreenIcon/>}
                              onChangeState={setIsFullscreen}/>
        </div>
    </div>
}