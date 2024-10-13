import React from "react";
import './Search.sass'
import {SearchIcon} from "../../icons/SearchIcon";

const Search = () => {
    return <div className="search-field">
        <SearchIcon/>
        <input id="search" placeholder="Поиск текстов" autoComplete="off"/>
    </div>
}

export default Search