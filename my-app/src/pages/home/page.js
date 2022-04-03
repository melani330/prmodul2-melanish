// const HomePlaylist=(props)=>{
//     const{spotify_url, logout, token, setSearchKey, searchTracks, tracks, ButtonUpdate}=props;
//     return(
//     <div className="container">
//     <header>
//         <h1>Spotify React Search</h1>
//         {!token ?
//             <button className="BtnAccess">
//                 <a href={spotify_url}>Login to Spotify</a>
//             </button>
//             : <button className="BtnAccess" onClick={logout}>Logout</button>}
            
//         {token ?
//             <form onSubmit={searchTracks}>
//                 <input className="SearchInput" type="text" onChange={e => setSearchKey(e.target.value)}/>
//                 <button className="BtnSubmit" type={"submit"}>Search</button>
//             </form>
//             : <h4>~ Please login ~</h4>
//         }
//     </header>
    
//     <div className="container">
//         <table responsive>
//             <thead>
//                 <tr className="head">
//                     <th><h4>Album</h4></th>
//                     <th><h4>Song Title</h4></th>
//                     <th><h4>Artist</h4></th>
//                     <th><h4>Album Title</h4></th>
//                     <th><h4>Release Date</h4></th>
//                     <th><h4>Select</h4></th>
//                 </tr>
//             </thead>
//             <tbody>
//             {tracks.map((track,) => {
//                 return (
//                 <tr className="bodyTable" key={track.id}>
//                     <td>{track.album.images.length ? <img width={"100%"} src={track.album.images[0].url} alt=""/> : <div>No Image</div>}</td>
//                     <td><p>{track.name}</p></td>
//                     <td><p>{track.album.artists[0].name}</p></td>
//                     <td><p>{track.album.name}</p></td>  
//                     <td><p>{track.album.release_date}</p></td>
//                     <button className="select-track-button" onClick={onSelect}>
//                         {isSelected ? "Deselect" : "Select"}
//                     </button>
                    
//                 </tr>
//                 )
//             })}
//             </tbody>
//         </table>
//     </div>
//     </div>
    
//     );
//         }
//     export {HomePlaylist};