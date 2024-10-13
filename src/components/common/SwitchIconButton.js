import {useState} from "react";
import {IconButton} from "./IconButton";

export const SwitchIconButton = (props) => {
    const [state, setState] = useState(false)

    const switchState = () => {
        setState(!state)
        props.onChangeState(state)
    }

    return <IconButton icon={state ? props.checkedStateIcon : props.uncheckedStateIcon} onClick={switchState} />
}