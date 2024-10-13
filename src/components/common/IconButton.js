import './IconButton.sass'

export const IconButton = (props) => {
    return <button className="icon-button" onClick={props.onClick}>
        {props.icon}
    </button>
}