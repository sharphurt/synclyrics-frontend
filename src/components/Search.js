import React from "react";
import SearchIcon from "../icons/SearchIcon";
import './Search.sass'

const Search = () => {
    return <div className="search-field">
        <SearchIcon/>
        <input id="search" placeholder="Поиск текстов" autoComplete="off"/>
    </div>
}

export default Search