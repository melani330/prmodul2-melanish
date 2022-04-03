
// import {useEffect, useState} from "react";
// import axios from 'axios';
// import {HomePlaylist} from "../components/TrackCard/home.js";

// function Search() {

//     let client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
//     let scope = 'playlist-modify-private';
//     let redirect_uri = 'http://localhost:3000';

//     let spotify_url = 'https://accounts.spotify.com/authorize';
//         spotify_url += '?response_type=token';
//         spotify_url += '&client_id=' + encodeURIComponent(client_id);
//         spotify_url += '&scope=' + encodeURIComponent(scope);
//         spotify_url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

//     const [token, setToken] = useState("")
//     const [searchKey, setSearchKey] = useState("")
//     const [tracks, setTracks] = useState([])
//     // const [status, setStatus] = useState(false)
//     // const [select, setSelect]= useState("")    

//     useEffect(() => {
//         const hash = window.location.hash
//         let token = window.localStorage.getItem("token")

//         if (!token && hash) {
//             token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
//             window.location.hash = ""
//             window.localStorage.setItem("token", token)
//         }
//         setToken(token)
//     }, [])

//     const logout = () => {
//         setToken("")
//         window.localStorage.removeItem("token")
//     }

//     const searchTracks = async (e) => {
//         e.preventDefault()
//         const {data} = await axios.get("https://api.spotify.com/v1/search", {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             params: {
//                 q: searchKey,
//                 type: "track"
//             }
//         })
//         setTracks(data.tracks.items)
//     }

//     const ButtonUpdate = (e) =>{
//         e.preventDefault();
//         } 

//     return (
//         <div>
//             <HomePlaylist 
//             spotify_url={spotify_url} 
//             logout={logout} 
//             token={token}
//             searchTracks={searchTracks} 
//             tracks={tracks} 
//             ButtonUpdate={ButtonUpdate}
//             setSearchKey={setSearchKey}/>
//         </div>
//     );
// }

// export default Search;
