import "./style.css";
import React from "react";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#7129299e",
        },
    },
});
const CreatePlaylist = ({ handleInputCreatePlaylist, handleSubmitFormCreatePlaylist}) => {
    return (
        <ThemeProvider theme={theme}>
        <div className="create-playlist">
            <h2 className="create-playlist-title">Create Playlist</h2>
            <form onSubmit={handleSubmitFormCreatePlaylist}>
                <div className="create-playlist-input-group">
                    <TextField 
                        id="title" 
                        label="Add a title" 
                        variant="filled" 
                        type="text"
                        name="title"
                        color="primary"
                        focused
                        inputProps={{ minLength: 10 }}
                        onChange={handleInputCreatePlaylist}
                        required/>
                </div>
                <div className="create-playlist-input-group">
                    <TextField
                        id="description"
                        name="description"
                        type="text"
                        label="Add a description"
                        rows={3}
                        multiline
                        variant="filled"
                        color="primary"
                        focused
                        inputProps={{ minLength: 20 }}
                        onChange={handleInputCreatePlaylist}
                        required/>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
        </ThemeProvider>
    // </div>
    );
};

export default CreatePlaylist;