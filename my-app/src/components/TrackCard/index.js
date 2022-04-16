import "./style.css"
import React from 'react';
// import { MouseEventHandler } from 'react';
// import {ITrack} from '../../utils/model';

const TrackCard = ({trackName, album, artists, isSelected, onSelect}) => {
    let artistsName = artists.map((artist) => artist.name).join(", ");

    return (
        <div className="card-container">
            <table>
                <tr className="description-container">
                    <td><img className="album-image" src={album.images[0].url} alt={album.name}/></td>
                    <td>
                        <div className="track-name">{trackName}</div>
                        <div className="artist-name">{artistsName}</div>
                        <div className="album-name">{album.name}</div>
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
// interface ITrackCardProps {
//     track: ITrack;
//     isSelected: boolean;
//     onSelect: MouseEventHandler<HTMLButtonElement>;
// }

// const TrackCard = ({ track, isSelected, onSelect }: ITrackCardProps) => {
//     let artistsName = track.artists.map((artist) => artist.name).join(", ");

//     return (
//         <div className="card-container">
//             <table>
//                 <tr className="description-container">
//                     <td>
//                         <img className="album-image" 
//                         src={track.album.images[0].url} 
//                         alt={track.album.name}/>
//                     </td>
//                     <td>
//                         <div className="track-name">{track.name}</div>
//                         <div className="artist-name">{artistsName}</div>
//                         <div className="album-name">{track.album.name}</div>
//                         <button className="select-track-button" onClick={onSelect}>
//                             {isSelected
//                                 ? "Deselect"
//                                 : "Select"}
//                         </button>
//                     </td>
                    
//                 </tr>
//             </table>
//         </div>
//     );
// };
// export default TrackCard;

