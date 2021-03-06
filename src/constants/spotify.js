const AUTH_BASE_URL = "https://accounts.spotify.com/authorize";
const API_BASE_URL = "https://api.spotify.com/v1";
const RESPONSE_TYPE = "token";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API_KEY;
const SCOPE = "playlist-modify-private playlist-modify-public user-read-private playlist-read-private playlist-read-collaborative";
const REDIRECT_URI = process.env.NODE_ENV === 'production'
  ? 'https://final-project-melanish.vercel.app'
  : 'http://localhost:3000';

export {
    AUTH_BASE_URL,
    API_BASE_URL,
    RESPONSE_TYPE,
    CLIENT_ID,
    SCOPE,
    REDIRECT_URI,
};