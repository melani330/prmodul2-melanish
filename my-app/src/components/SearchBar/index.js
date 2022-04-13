import "./style.css";
import React from "react";
import TextField from '@mui/material/TextField';
// import { borderBottom } from "@mui/system";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[200],
        },
        secondary: {
            main: purple[300],
        },
    },
});

const SearchBar = ({searchQuery, handleInputSearch, handleSearch}) => {
    return (
        <ThemeProvider theme={theme}>
        <form className="search-bar" onSubmit={handleSearch}>
            <div className="text-field">
                <TextField 
                        id="filled-search" 
                        type="search"
                        className="textfield"
                        value={searchQuery}
                        onChange={handleInputSearch}
                        label="Search Music"
                        size="small"
                        color="primary"
                        focused 
                        variant="filled" />
            
            <button className="search-button" type="submit">
                Search
            </button>
            </div>
        </form>
        </ThemeProvider>
    );
};

export default SearchBar;
