import "./style.css";
import React from "react";
const SearchBar = ({handleInputSearch, handleSearch}) => {
    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                className="search-input"
                placeholder="Search here"
                onChange={handleInputSearch}/>
            <button className="search-button" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
