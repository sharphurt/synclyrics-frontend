import './DropdownSelect.sass'
import {useState} from "react";

export const DropdownSelect = (props) => {
    const [value, setValue] = useState(props.defaultValue)
    const onChange = (event) => {
        props.onSelect(event.target.value)
        setValue(event.target.value)
    }

    return <select className="dropdown-select" onChange={onChange} value={value}>
        {props.options.map((item, index) => {
            return <option key={index} value={item.value}>{item.name}</option>
        })}
    </select>
}