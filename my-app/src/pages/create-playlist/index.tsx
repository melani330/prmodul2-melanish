import {useState} from 'react';
import {notification} from 'antd';
import {useAppSelector} from '../../redux/hooks';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/spotify';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/SearchBar';
import CreatePlaylist from '../../components/CreatePlaylist';
import TrackCard from '../../components/TrackCard';
import {ITrack} from '../../utils/model';
import React from 'react';
import './style.css';

const Page = () => {
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const [tracks, setTracks] = useState < Array < ITrack >> ([]);
    const [selectedTrackUri,setSelectedTrackUri] = useState < Array < string >> ([]);
    const [searchQuery,  setSearchQuery]=useState(String);
    const [formCreatePlaylist,setFormCreatePlaylist] = useState({title: "", description: ""});

    const handleSubmitFormCreatePlaylist = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const responseCreatePlaylist = await axios.post(`${API_BASE_URL}/users/${user.id}/playlists`, {
                name: formCreatePlaylist.title,
                public: false,
                description: formCreatePlaylist.description
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            },);
            if (selectedTrackUri.length > 0) {
                await axios.post(`${API_BASE_URL}/playlists/${responseCreatePlaylist.data.id}/tracks`, {
                    uris: selectedTrackUri
                }, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                },);
            }
            setSelectedTrackUri([]);
            alert("You have successfully created a new playlist!");
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            if (error.response.data.error.message === 'The access token expired') {
                alert("There is something wrong, make sure you have been logged in!");
            }
        }
    };
    const handleInputCreatePlaylist = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormCreatePlaylist({
            ...formCreatePlaylist,
            [name]: value
        });
    };

    const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (searchQuery) {
            setLoading(true);
            axios.get(`${API_BASE_URL}/search`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                params: {
                    q: searchQuery,
                    type: 'track',
                    limit: 24
                }
            }).then((response) => {
                setTracks(response.data.tracks.items);
                setLoading(false);
            }).catch((error) => {
                if (error.response.data.error.message === 'The access token expired') {
                    notification.error({message: 'Error', description: 'There is something wrong, make sure you have been logged in!'});
                }
            });
        }
    };


        const handleSelectTrack = (trackUri : string) => {
            if (selectedTrackUri.includes(trackUri)) {
                setSelectedTrackUri([...selectedTrackUri.filter((uri) => uri !== trackUri)]);
            } else {
                setSelectedTrackUri([
                    ...selectedTrackUri,
                    trackUri
                ]);
            }
        };
        return (
            <div className="page-container">
            <Navbar/>
            <div className="split-content">
                <div className="split-content-child-1">
                    <CreatePlaylist
                        handleInputCreatePlaylist={handleInputCreatePlaylist}
                        handleSubmitFormCreatePlaylist={handleSubmitFormCreatePlaylist}/>
                </div>
                <div className="split-content-child-2">
                    <h1 className="section-title">
                        Find Your Own Music
                    </h1>
                    <SearchBar 
                        handleInputSearch ={handleInputSearch}
                        handleSearch={handleSearch}/>
                    <h2 className="sub-section-title">
                        {/* {tracks.length > 0 && "Results"} */}
                        {tracks.length > 0 }
                    </h2>
                    <div className="playlist-container">
                        {tracks.length > 0 && tracks.map((track) => (
                        <TrackCard
                            key={track.uri}
                            track={track}
                            isSelected={selectedTrackUri.includes(track.uri)}
                            onSelect={() => handleSelectTrack(track.uri)}
                        />))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
