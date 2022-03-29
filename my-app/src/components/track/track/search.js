
import {useEffect, useState} from "react";
import axios from 'axios';

function Search() {

    let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    let scope = 'playlist-modify-private';
    let redirect_uri = 'http://localhost:3000';

    let spotify_url = 'https://accounts.spotify.com/authorize';
        spotify_url += '?response_type=token';
        spotify_url += '&client_id=' + encodeURIComponent(client_id);
        spotify_url += '&scope=' + encodeURIComponent(scope);
        spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchTracks = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setTracks(data.tracks.items)
    }

    return (
        <div className="container">
            <header>
                <h1>Spotify React Search</h1>
                {!token ?
                    <button className="BtnAccess">
                        <a href={spotify_url}>Login to Spotify</a>
                    </button>
                    : <button className="BtnAccess" onClick={logout}>Logout</button>}
                    
                {token ?
                    <form onSubmit={searchTracks}>
                        <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                        <button className="BtnSubmit" type={"submit"}>Search</button>
                    </form>
                    : <h4>~ Please login ~</h4>
                }
            </header>

            <div className="container">
                <table responsive>
                    <thead>
                        <tr className="head">
                            <th><h4>Album</h4></th>
                            <th><h4>Song Title</h4></th>
                            <th><h4>Artist</h4></th>
                            <th><h4>Album Title</h4></th>
                            <th><h4>Release Date</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                    {tracks.map((track) => {
                        return (
                        <tr className="bodyTable" key={track.id}>
                            <td>{track.album.images.length ? <img width={"100%"} src={track.album.images[0].url} alt=""/> : <div>No Image</div>}</td>
                            <td><p>{track.name}</p></td>
                            <td><p>{track.album.artists[0].name}</p></td>
                            <td><p>{track.album.name}</p></td>  
                            <td><p>{track.album.release_date}</p></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Search;
