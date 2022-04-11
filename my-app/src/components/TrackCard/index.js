import "./style.css"
import React from 'react';
const TrackCard = ({trackName, album, artists, isSelected, onSelect}) => {
    let artistsName = artists.map((artist) => artist.name).join(", ");

    return (
        <div className="card-container">
            <table>
                {/* <img className="album-image" src={album.images[0].url} alt={album.name} /> */}
                <tr className="description-container">
                    <td><img className="album-image" src={album.images[0].url} alt={album.name}/></td>
                    <td>
                        <div className="track-name">{trackName}</div>
                        <div className="artist-name">{artistsName}</div>
                        <div className="album-name">{album.name}</div>
                        {/* </tr> */}

                        <button className="select-track-button" onClick={onSelect}>
                            {isSelected
                                ? "Deselect"
                                : "Select"}
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default TrackCard;
