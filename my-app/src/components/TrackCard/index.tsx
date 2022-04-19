import { MouseEventHandler } from 'react';
import { ITrack } from '../../utils/model';
import React from 'react';
import './style.css';

interface ITrackCardProps {
  track: ITrack;
  isSelected: boolean;
  onSelect: MouseEventHandler<HTMLButtonElement>;
}

const TrackCard = ({ track, isSelected, onSelect }: ITrackCardProps) => {
  const artistsName = track.artists.map((artist) => artist.name).join(', ');

  return (
    <div className="card-container">
      <table>
        <tbody>
          <tr className="description-container">
            <td><img
              data-testid="track-card-image"
              className="album-image"
              src={track.album.images[0].url}
              alt={track.album.name}
            /></td>
            <td>
              <div data-testid="track-card-name" className="track-name">{track.name}</div>
              <div data-testid="track-card-artist-name" className="artist-name">{artistsName}</div>
              <div data-testid="track-card-album-name" className="album-name">{track.album.name}</div>
              <button data-testid="track-card-button" type="button" className="select-track-button" onClick={onSelect}>
                {isSelected ? 'Deselect' : 'Select'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default TrackCard;