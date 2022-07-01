import { render, screen, fireEvent } from '@testing-library/react';
import TrackCard from './index';
import { ITrack } from '../../utils/model';
import React from 'react';

const trackProps: ITrack = {
    uri: 'spotify:track:4EIYGehF9auPB6JL2BEt8e',
    name: 'Now I know',
    album: {
        id: '31JsMFJBIT6uC8TpNnSGpX',
        name: 'Now I know',
        images: [
        {
            url: '	https://i.scdn.co/image/ab67616d0000b273b0e4b65f2a08acafa00c0ac7',
        },
        ],
    },
    artists: [{ id: '3sMsWkApnc6yPyMUsNHQlb', name: 'Kaleb J' }],
// https://open.spotify.com/artist/3sMsWkApnc6yPyMUsNHQlb?si=219061045dad4f07
// https://open.spotify.com/album/31JsMFJBIT6uC8TpNnSGpX?si=19e244f6a0504096
};
test('Render image track in TrackCard Component', ()=>{
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const trackImageTest = screen.getByTestId("track-card-image");
    expect(trackImageTest).toBeInTheDocument();
});

test('Render track name in TrackCard Component',()=>{
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const trackNameTest = screen.getByTestId("track-card-name");
    expect(trackNameTest).toBeInTheDocument();
})
test('Render an artist name in TrackCard component', () => {
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const artistNameElement = screen.getByTestId('track-card-artist-name');
    expect(artistNameElement).toBeInTheDocument();
});

test('Render an album name in TrackCard component', () => {
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const albumNameElement = screen.getByTestId('track-card-album-name');
    expect(albumNameElement).toBeInTheDocument();
});

test('Render a button in TrackCard component', () => {
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const buttonElement = screen.getByTestId('track-card-button');
    expect(buttonElement).toBeInTheDocument();
});

test('Button text in TrackCard component is Select', () => {
    render(
        <TrackCard track={trackProps} isSelected={false} onSelect={() => {}} />,
    );
    const buttonElement = screen.getByTestId('track-card-button');
    expect(buttonElement.innerHTML).toBe('Select');
});

test('Button text in TrackCard component is Deselect', () => {
    render(<TrackCard track={trackProps} isSelected onSelect={() => {}} />);
    const buttonElement = screen.getByTestId('track-card-button');
    expect(buttonElement.innerHTML).toBe('Deselect');
});

test('Calls onClick prop when clicked button in TrackCard component', () => {
    const handleClick = jest.fn();
    render(<TrackCard track={trackProps} isSelected onSelect={handleClick} />);
    const buttonElement = screen.getByTestId('track-card-button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});