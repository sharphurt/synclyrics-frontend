import {useContext, useState, useEffect, useCallback} from "react";
import './KaraokeDisplay.sass'
import {PlaybackContext} from "../../providers/PlaybackProvider";
import {KaraokeDialogue} from "./KaraokeDialogue";
import {TestData} from "./TestData";
import {useTimer} from "react-use-precision-timer";
import {findKaraokeDialogues} from "../../util/karaoke/findKaraokeDialogue";

const KaraokeDisplay = () => {
    const playback = useContext(PlaybackContext)
    const [currentDialogues, setCurrentDialogues] = useState([])
    const [dialogueStartAt, setDialogueStartAt] = useState(0)
    const [time, setTime] = useState(0)

    const callback = useCallback(() => {
        setTime(time => time + 5)
    }, []);
    const timer = useTimer({delay: 5}, callback);

    useEffect(() => {
        timer.start()
        setTime(playback.progress + 3700)
        return () => timer.stop()
    }, [timer, playback.progress]);

    useEffect(() => {
        const currentDialogues = findKaraokeDialogues(TestData.dialogues, time)
        setCurrentDialogues(currentDialogues)
    }, [time]);

    return <div className="karaoke-container">
        {TestData.dialogues.map((item, index) => <KaraokeDialogue isCurrent={currentDialogues.includes(index)}
                                                                  time={time}
                                                                  dialogue={item} key={index}/>)}
    </div>
}

export default KaraokeDisplay